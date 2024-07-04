# 8.nginx+jwt+maven+git
## JWT
## 01.什么是JWT👍
JWT （JSON Web Token） 是目前最流行的跨域认证解决方案，是一种基于 Token 的认证授权机制。从 JWT 的全称可以看出，JWT 本身也是 Token，一种规范化之后的 JSON 结构的 Token。
Token 自身包含了身份验证所需要的所有信息，因此，我们的服务器不需要存储 Session 信息。这显然增加了系统的可用性和伸缩性，大大减轻了服务端的压力。
可以看出，JWT 更符合设计 RESTful API 时的「Stateless（无状态）」原则 。
并且， 使用 Token 认证可以有效避免 CSRF **(跨站请求伪造) **攻击，因为 Token 一般是存在在 localStorage **(本地存储)**中，使用 JWT 进行身份验证的过程中是不会涉及到 Cookie 的。
**JWT 由哪些部分组成？**它由三部分组成，头部、载荷与签名 
**Header(头部) : **描述 JWT 的元数据，定义了生成签名的算法以及 Token 的类型。
**Payload(载荷) **: 用来存放实际需要传递的数据 
**Signature（签名）：**服务器通过 Payload、Header 和一个密钥(Secret)使用 Header 里面指定的签名算法（默认是 HMAC SHA256）生成。
## 02.JWT token 泄露了怎么办
使用 https 加密你的应用，返回 jwt 给客户端时设置 httpOnly=true 并 且使用 cookie 而不是 
LocalStorage 存储 jwt，这样可以防止 XSS **(跨站脚本)**攻击和 CSRF **(跨站请求伪造)** 攻击 
## 03.Secret 如何设计
jwt 唯一存储在服务端的只有一个 secret，个人认为这个 secret 应该设计成和用户相关的属性， 
而不是一个所有用户公用的统一值。这样可以有效的避免 一些注销和修改密码时遇到的窘境
## 04.如何解决续签问题
传统的 cookie 续签方案一般都是框架自带的，session 有效期 30 分钟， 30 分钟内如果有访问，session 有效期被刷新至 30 分钟。而 jwt 本身的 payload 之中也有一个 exp 过期时间参 
数，来代表一个 jwt 的时效性，而 jwt 想延期这个 exp 就有点身不由己了，因为 payload 是参 
与签名的，一旦过期 时间被修改，整个 jwt 串就变了，jwt 的特性天然不支持续签。 
**解决方案 **

1. 每次请求刷新 jwt。 jwt 修改 payload 中的 exp 后整个 jwt 串就会发生改变，那就让它变好 了，每次请求都返回一个新的 jwt 给客户端。只是这种方案太暴力了，会带来 的性能问题 2.只要快要过期的时候刷新 jwt 此方案是基于上个方案的改造版，只在前一个 jwt 的最后几分钟返回给客户 端一个新的 jwt。这样做，触发刷新 jwt 基本就要看运气了，如果用户恰巧在 最后几分钟访问了服务器，触发了刷新，万事大吉。如果用户连续操作了 27 分 钟，只有最后的 3 分钟没有操作，导致未刷新 jwt，无疑会令用户抓狂。
2. 完善 refreshToken 借鉴 oauth2 的设计，返回给客户端一个 refreshToken，允许客户端主动 刷新 jwt。一般而言，jwt 的过期时间可以设置为数小时，而 refreshToken 的 过期时间设置为数天
3. 使用 Redis 记录独立的过期时间 在 Redis 中单独为每个 jwt 设置了过期时间，每次访问时刷新 jwt 的过期时间，若 jwt 不存在与 Redis 中则认为过期
## 05.如何防止令牌被盗用
如果令牌被盗，只要该令牌不过期，任何服务都可以使用该令牌，有可 能引起不安全操作。我们可以在每次生成令牌的时候，将用户的客户端信息获取， 同时获取用户的 IP 信息，然后将 IP 和客户端信息以 
MD5 的方式进行加密，放到令牌中作为载荷的一部分，用户每次访问微服务的时候，要先经过微服务网 关， 此时我们也获取用户客户端信息，同时获取用户的 IP，然后将 IP 和客户端信息 拼接到一起再进 行 MD5 加密，如果 MD5 值和载荷不一致，说明用户的 IP 发生 了变化或者终端发生了变化，有被盗 
的嫌疑，此时不让访问即可。这种解决方案 比较有效。当然，还有一些别的方法也能减少令牌被盗用的概率，例如设置令牌超时时间不要太长。 
# nginx
## 01.nginx是什么
Nginx ，是一个 Web 服务器和反向代理服务器，用于 HTTP、HTTPS、SMTP、POP3 和 IMAP 协议。 
目前使用的最多的 Web 服务器或者代理服务器，像淘宝、新浪、网易、迅雷等都在使用。 
Nginx的主要功能如下： 
1、作为 http server (代替 Apache) 
2、反向代理服务器 
3、实现负载均衡 
4、虚拟主机 
## 02.Nginx常用命令有哪些
1、启动 nginx 。 
2、停止 nginx -s stop 或 nginx -s quit 。 
3、重载配置 ./sbin/nginx -s reload(平滑重启) 或 service nginx reload 。 
4、重载指定配置文件 .nginx -c /usr/local/nginx/conf/nginx.conf 。 
5、查看 nginx 版本 nginx -v 。 
6、检查配置文件是否正确 nginx -t 。 
7、显示帮助信息 nginx -h 。 
## 03.Nginx有哪些优点
1、跨平台、配置简单。 
2、非阻塞、高并发连接（处理 2-3 万并发连接数，官方监测能支持 5 万并发） 
3、内存消耗小 （开启 10 个 Nginx 才占 150M 内存） 
4、成本低廉，且开源。 
5、稳定性高，宕机的概率非常小。
## 04.什么是正向代理
一个位于客户端和原始服务器之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并 指定目标(原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。客户端才能使用 正向代理。 
正向代理总结就一句话：代理端代理的是客户端。 
## 05.什么是反向代理
反向代理是指以代理服务器来接受 internet 上的连接请求，然后将请求，发给内部网络上的服务器， 
并将从服务器上得到的结果返回给 internet 上请求连接的客户端，此时代理服务器对外就表现为一个 
反向代理服务器。 
反向代理总结就一句话：代理端代理的是服务端. 
反向代理的优点： 
反向代理服务器可以隐藏源服务器的存在和特征。它充当互联网云和 Web 服务器之间的中间层。这对于 安全方面来说是很好的，特别是当我们使用 Web 托管服务时
## 06.什么是负载均衡
负载均衡即是代理服务器将接收的请求均衡的分发到各服务器中，负载均衡主要解决网络拥塞问题，提高服务器响应速度，服务就近提供，达到更好的访问质量，减少后台服务器大并发压力。 
## 07.Nginx如何处理Http请求
1、Nginx 在启动时，会解析配置文件，得到需要监听的端口与 IP 地址，然后在 Nginx 的 Master 进程里面先初始化好这个监控的Socket(创建 S ocket，设置 addr、reuse 等选项，绑定到指定的 ip 地址端口，再 listen 监听)。 
2、再 fork(一个现有进程可以调用 fork 函数创建一个新进程。由 fork 创建的新进程被称为子进程)出多个子进程出来。 
3、子进程会竞争 accept 新的连接。此时，客户端就可以向 nginx 发起连接了。当客户端与nginx进行三次握手，与 nginx 建立好一个连接后。此时，某一个子进程会 accept 成功，得到这个建立好的连接的 Socket ，然后创建 nginx 对连接的封装，即 ngx_connection_t 结构体。 
4、设置读写事件处理函数，并添加读写事件来与客户端进行数据的交换。 
5、Nginx 或客户端来主动关掉连接，到此，一个连接就寿终正寝了 
## 08.Nginx有哪些负载均衡策略
负载均衡，即是代理服务器将接收的请求均衡的分发到各服务器中。 
Nginx 默认提供了 3 种负载均衡策略： 
1、轮询（默认）round_robin 
每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器 down 掉，能自动剔除。 
2、IP 哈希 ip_hash 
每个请求按访问 ip 的 hash 结果分配，这样每个访客固定访问一个后端服务器，可以解决 session 共享的 问题。当然，实际场景下，一般不考虑使用 ip_hash 解决 session 共享。 
3、最少连接 least_conn 
下一个请求将被分派到活动连接数量最少的服务器 
通过 Nginx 插件，我们还可以引入 fair、url_hash 等负载均衡策略。 
## 09.为什么Nginx不使用多线程
**Apache: **创建多个进程或线程，而每个进程或线程都会为其分配 cpu 和内存（线程要比进程小的多， 
所以 worker 支持比 perfork 高的并发），并发过大会榨干服务器资源。 
**Nginx: **采用单线程来异步非阻塞处理请求（管理员可以配置 Nginx 主进程的工作进程的数量） 
(epoll)，不会为每个请求分配 cpu 和内存资源，节省了大量资源，同时也减少了大量的 CPU 的上下 
文切换。所以才使得 Nginx 支持更高的并发
## 10.Nginx如何实现高并发的
异步，非阻塞，使用了epoll 和大量的底层代码优化。
如果一个server采用一个进程负责一个request的方式，那么进程数就是并发数。正常情况下，会有很多进程一直在等待中。
而nginx采用一个master进程，多个woker进程的模式。

- master进程主要负责收集、分发请求。每当一个请求过来时，master就拉起一个worker进程负责处理这个请求。
- 同时master进程也负责监控woker的状态，保证高可靠性
- woker进程一般设置为跟cpu核心数一致。nginx的woker进程在同一时间可以处理的请求数只受内存限制，可以处理多个请求。

Nginx 的异步非阻塞工作方式正把当中的等待时间利用起来了。在需要等待的时候，这些进程就空闲出来待命了，因此表现为少数几个进程就解决了大量的并发问题。
每进来一个request，会有一个worker进程去处理。但不是全程的处理，处理到什么程度呢?处理到可能发生阻塞的地方，比如向上游(后端)服务器转发request，并等待请求返回。那么，这个处理的worker很聪明，他会在发送完请求后，注册一个事件：“如果upstream返回了，告诉我一声，我再接着干”。于是他就休息去了。此时，如果再有request 进来，他就可以很快再按这种方式处理。而一旦上游服务器返回了，就会触发这个事件，worker才会来接手，这个request才会接着往下走。
# maven
## 01.Maven 是什么
Maven 主要服务于基于 Java 平台的项目构建、依赖管理和项目信息管理 
Maven 的主要功能主要分为 5 点： 
依赖管理系统 
多模块构建 
一致的项目结构 
一致的构建模型和插件机制 
## 02.Maven 规约是什么
> /src/main/java/ ：Java 源码。 
/src/main/resource ：Java 配置文件，资源文件。 
/src/test/java/ ：Java 测试代码。 
/src/test/resource ：Java 测试配置文件，资源文件。 
/target ：文件编译过程中生成的 .class 文件、jar、war 等等。 
pom.xml ：配置文件 
Maven 要负责项目的自动化构建，以编译为例，Maven 要想自动进行编译，那么它必须知道 Java 的 
源文件保存在哪里，这样约定之后，不用我们手动指定位置，Maven 能知道位置，从而帮我们完成自动 
编译。 
遵循“约定>>>配置>>>编码”。即能进行配置的不要去编码指定，能事先约定规则的不要去进行配置。这 
样既减轻了劳动力，也能防止出错

## 03.Maven 常用命令
> mvn archetype：create ：创建 Maven 项目。 
mvn compile ：编译源代码。 
mvn deploy ：发布项目。 
mvn test-compile ：编译测试源代码。 
mvn test ：运行应用程序中的单元测试。 
mvn site ：生成项目相关信息的网站。 
mvn clean ：清除项目目录中的生成结果。 
mvn package ：根据项目生成的 jar/war 等。 
mvn install ：在本地 Repository 中安装 jar 。 
mvn eclipse:eclipse ：生成 Eclipse 项目文件。 
mvn jetty:run 启动 Jetty 服务。 
mvn tomcat:run ：启动 Tomcat 服务。 
mvn clean package -Dmaven.test.skip=true ：清除以前的包后重新打包，跳过测试类。 
用到最多的命令 
mvn eclipse:clean ：清除 Project 中以前的编译的东西，重新再来。 
mvn eclipse:eclipse ：开始编译 Maven 的 Project 。 
mvn clean package ：清除以前的包后重新打包。 

## 04.Maven 有哪些优点和缺点
> **优点**
简化了项目依赖管理。 
易于上手，对于新手可能一个 mvn clean package 命令就可能满足我们的工作。 
便于与持续集成工具(Jenkins)整合。 
便于项目升级，无论是项目本身升级还是项目使用的依赖升级。 
有助于多模块项目的开发，一个模块开发好后，发布到仓库，依赖该模块时可以直接从仓库更新，而不 
用自己去编译。 
Maven 有很多插件，便于功能扩展，比如生产站点，自动发布版本等。 
> 
**缺点**
Maven 是一个庞大的构建系统，学习难度大。 
Maven 采用约定优于配置的策略(convention over configuration)，虽然上手容易，但是一旦出了问题，难于调试。 
很多 repository 无法访问，比如 Google Code、 JBoss 仓库无法访问（这个也好解决，在  中增加阿里巴巴的 Maven 私服）

## 05.Maven 坐标的含义？
●    groupId：定义当前Maven项目隶属的实际项目。
●    artifactId：该元素定义当前实际项目中的一个Maven项目(模块)。推荐的做法是使用实际项目名称作为artifactId的前缀。比如junit，junit就是实际的项目名称，方便而且直观。在默认情况下，Maven生成的构件，会以artifactId作为文件头。例如junit-3.8.1.jar，使用实际项目名称作为前缀，就能方便的从本地仓库找到某个项目的构件。
●    version：该元素定义了使用构件的版本。
●    packaging：定义Maven项目打包的方式，使用构件的什么包。打包方式通常与所生成构件的文件扩展名对应。
●    classifier：该元素用来帮助定义构建输出的一些附件。附属构件与主构件对应。
## 06.LASTEST、RELEASE、SNAPSHOT 的区别
LASTEST ：是指某个特定构件最新的发布版或者快照版(SNAPSHOT)，最近被部署到某个特定仓库的构 件。
RELEASE ：是指仓库中最后的一个非快照版本。 
SNAPSHOT ：泛指。 
## 07.Maven 依赖原则？
路径最短优先原则 
pom文 件中申明顺序优先 
覆写优先（子 pom 内声明的优先于父 pom 中的依赖）
## 08.Maven如何解决jar冲突
遇到冲突的时候第一步，要找到 Maven 加载的到时是什么版本的 jar 包，通过们 mvn 
dependency:tree 查看依赖树，或者使用 IDEA Maven Helper 插件。 
然后，通过 Maven 的依赖原则来调整坐标在 pom 文件的申明顺序是最好的办法，或者使用将冲突中不 
想要的 jar 引入的 jar 进行  掉。
## 09.Maven 生命周期是怎么样的
Maven有三套相互独立的生命周期，分别是 Clean、Default 和 Site。每个生命周期包含一些阶 
段，阶段是有顺序的，后面的阶段依赖于前面的阶段 
**1、Clean 生命周期：清理项目，包含三个 phase ： **
pre-clean：执行清理前需要完成的工作。 
clean：清理上一次构建生成的文件。 
post-clean：执行清理后需要完成的工作 
**2、Default 生命周期：构建项目，重要的 phase 如下： **
validate：验证工程是否正确，所有需要的资源是否可用。 
compile：编译项目的源代码。 
test：使用合适的单元测试框架来测试已编译的源代码。这些测试不需要已打包和布署。 
package：把已编译的代码打包成可发布的格式，比如 jar、war 等。 
integration-test：如有需要，将包处理和发布到一个能够进行集成测试的环境。 
verify：运行所有检查，验证包是否有效且达到质量标准。 
install：把包安装到maven本地仓库，可以被其他工程作为依赖来使用。 
deploy：在集成或者发布环境下执行，将最终版本的包拷贝到远程的repository，使得其他的开 
发者或者工程 可以共享。 
**3、Site 生命周期：建立和发布项目站点，phase 如下： **
pre-site：生成项目站点之前需要完成的工作 
site：生成项目站点文档 
post-site：生成项目站点之后需要完成的工作 
site-deploy：将项目站点发布到服务器 
各个生命周期相互独立，一个生命周期的阶段前后依赖 
## 10.什么是 Maven 插件
> Maven 生命周期的每一个阶段的具体实现都是由 Maven 插件实现的。插件通常提供了一个目标的集合，并且可以使用下面的语法执行：mvn [plugin-name]:[goal-name] 
**Maven 提供了下面两种类型的插件： **
Build plugins ：在构建时执行，并在 pom.xml 的 元素中配置。 
Reporting plugins ：在网站生成过程中执行，并在 pom.xml 的元素中配置。 
**下面是一些常用插件的列表 **
clean ：构建之后清理目标文件。删除目标目录。 
compiler ：编译 Java 源文件。 
surefile ：运行 JUnit 单元测试。创建测试报告。 
jar ：从当前工程中构建 JAR 文件。 
war ：从当前工程中构建 WAR 文件。 
javadoc ：为工程生成 Javadoc 。 
antrun ：从构建过程的任意一个阶段中运行一个 ant 任务的集合。 

## 11.什么是 Maven 仓库
> ****Maven 的仓库只有两大类** **
1、本地仓库。 
2、远程仓库。在远程仓库中又分成了 3 种： 
中央仓库。 
私服。 
其它公共库。 
Maven 会先搜索本地仓库（repository），发现本地没有然后从远程仓库（中央仓库）获取 
Maven 中的仓库分为两种，SNAPSHOT 快照仓库和 RELEASE 发布仓库 
SNAPSHOT 快照仓库用于保存开发过程中的不稳定版本，RELEASE 正式仓库则是用来保存稳定的 
发行版本。定义一个组件/模块为快照版本，只需要在 pom 文件中在该模块的版本号后加上 - 
SNAPSHOT 即可(注意这里必须是大写)

# git
## 01.git常用命令
![](https://cdn.nlark.com/yuque/0/2022/png/29328785/1660655523600-9f14731d-bc17-43bc-b1db-9c25f5dbca05.png#averageHue=%23d9d9a2&clientId=uf980ab96-9f38-4&from=paste&height=354&id=uf60455dd&originHeight=442&originWidth=937&originalType=binary&ratio=1&rotation=0&showTitle=false&size=231720&status=done&style=none&taskId=u74846389-168b-4ca0-a49c-a8217027059&title=&width=749.6#averageHue=%23d9d9a2&id=S93gp&originHeight=442&originWidth=937&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none)
git init：创建 Git 库。 
git status ：查看当前仓库的状态。 
git show ：# 显示某次提交的内容 git show $id 
git diff ：查看本次修改与上次修改的内容的区别。 
git add  ：把现在所要添加的文件放到暂存区中。 git log -p  ：查看每次详细修改内容的 diff 。 git rm  ：从版本库中删除文件。 git reset  ：从暂存区恢复到工作文件。 git reset HEAD^ ：恢复最近一次提交过的状态，即放弃上次提交后的所有本次修改` 。 git commit ：把 Git add 到暂存区的内容提交到代码区中。 git clone ：从远程仓库拷贝代码到本地。 git branch ：查看当前的分支名称。 git branch -r ：查看远程分支。 git checkout ：切换分支。 git merge 
：将 branch 分支合并到当前分支。 git stash ：暂存。 git stash pop ：恢复最近一次的暂存。 git pull ：抓取远程仓库所有分支更新并合并到本地。 git push origin master ：将本地主分支推到远程主分支。
## 02.常用git工具
1、命令行 
2、IDEA Git 插件 
3、SourceTree 
4、SmartGit 
5、Tower 
6、Atom 
## 03.Git 和 SVN 的优缺点
**Git 是分布式版本控制系统，SVN 是集中式版本控制系统 **
**1）SVN 的优缺点 **
**优点**
1、管理方便，逻辑明确，符合一般人思维习惯。 
2、易于管理，集中式服务器更能保证安全性。 
3、代码一致性非常高。 
4、适合开发人数不多的项目开发。 
**缺点**
1、服务器压力太大，数据库容量暴增。 
2、如果不能连接到服务器上，基本上不可以工作，因为 SVN 是集中式服务器，如果服务器不能连 
接上，就不能 提交，还原，对比等等。 
3、不适合开源开发（开发人数非常非常多，但是 Google App Engine 就是用 SVN 的）。但是 
一般集中式 管理的有非常明确的权限管理机制（例如分支访问限制），可以实现分层管理，从 
而很好的解决开发人数众多 的问题。 
**2）Git 优缺点 **
**优点**
1、适合分布式开发，强调个体。 
2、公共服务器压力和数据量都不会太大。 
3、速度快、灵活。 
4、任意两个开发者之间可以很容易的解决冲突。 
5、离线工作。 
**缺点**
1、学习周期相对而言比较长。 
2、不符合常规思维。 
3、代码保密性差，一旦开发者把整个库克隆下来就可以完全公开所有代码和版本信息。
## 04.说说创建分支的步骤
1、git branch xxx_dev ：创建名字为 xxx_dev 的分支。 
2、git checkout xxx_dev ：切换到名字为 xxx_dev 的分支。 
3、git push origin xxx_dev ：执行推送的操作，完成本地分支向远程分支的同步。 
## 05.tag是什么
tag ，指向一次 commit 的 id ，通常用来给分支做一个标记 
通常我们会将每个 Release 版本打一个分支 
打标签 ：git tag -a v1.01 -m "Release version 1.01" 。 
提交标签到远程仓库 ：git push origin --tags 。 
查看标签 ：git tag 。 
查看某两次 tag 之间的 commit ：git log --pretty=oneline tagA..tagB 。 
查看某次 tag 之后的 commit ：git log --pretty=oneline tagA.. 。 
## 06.Git 提交代码时候写错 commit 信息后，如何重新设置 commit 信息
可以通过 git commit --amend 来对本次 commit 进行修改 
## 07.删除已经合并过的分支会发生什么事
在 Git中，删除分支就像是你把包装盒上的贴纸撕下来，贴纸撕掉了，盒子并不会就这样跟着消失。所 
以，当你删除合并过的分支不会发生什么事，也不会造成档桉或目录跟着被删除的状况。 
## 08.add 和 stage 有什么区别
![](https://cdn.nlark.com/yuque/0/2022/png/29328785/1660655662482-39e61a69-5365-40a2-95ac-5995a4d40609.png#averageHue=%23faf8f8&clientId=uf980ab96-9f38-4&from=paste&height=350&id=ub2b3df52&originHeight=438&originWidth=1001&originalType=binary&ratio=1&rotation=0&showTitle=false&size=120940&status=done&style=none&taskId=u89bd9fd7-eaa4-406b-a434-7bd281db8b3&title=&width=800.8#averageHue=%23faf8f8&id=mmG4m&originHeight=438&originWidth=1001&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none)
在回答这个问题之前需要先了解 Git 仓库的三个组成部分： 
工作区(Working Directory)：在 Git 管理下的正常目录都算是工作区，我们平时的编辑工作都是在 工作区完成。 
暂存区(Stage)：临时区域。里面存放将要提交文件的快照。 
历史记录区(History)：git commit 后的记录区。 
git add 和 git stage其实，他们两是同义的 
引入 git stage 的原因其实比较有趣：是因为要跟 svn add 区分，两者的功能是完全不一样的， 
svn add 是将某个文件加入版本控制，而 git add 则是把某个文件加入暂存区。为了避免误导，Git 引入了 git stage ，然后把 git diff --staged 做为 git diff --cached 的相同命令。基于 这个原因，我们建议使用 git stage 以及 git diff --staged 
## 09.如何从 Git 中删除文件，而不将其从文件系统中删除
如果你在 git add 过程中误操作，你最终会添加不想提交的文件。但是，git rm 则会把你的文件从你 
暂存区（索引）和文件系统（工作树）中删除，这可能不是你想要的。 
换成 git reset 操作 
## 10.merge 和 rebase 的有什么区别
Git 合并的两种方法。 
git merge ，把本地代码和已经取得的远程仓库代码合并。 
git rebase ，是复位基底的意思。 
git merge 会生成一个新的节点，之前的提交会分开显示；而 git rebase 操作不会生成新的操作， 
将两个分支融合成一个线性的提交 
## 11.reset 与 rebase 有什么区别？
reset 操作，不修改 commit 相关的东西，只会去修改 .git 目录下的东西。 
rebase 操作，会试图修改你已经 commit 的东西，比如覆盖 commit 的历史等，但是不能使用 
rebase 来修改已经 push 过的内容，容易出现兼容性问题。rebase 还可以来解决内容的冲突，解决 
两个人修改了同一份内容，然后失败的问题。 
## 12.pull 与 fetch 有什么区别
pull = fetch + merge 
使用 git fetch 是取回远端更新，不会对本地执行 merge 操作，不会去动你的本地的内容 
而是用 ·git pull` 会更新你本地代码到服务器上对应分支的最新版本 
## 13.什么是 fork 操作
fork ，是对一个仓库的克隆。克隆一个仓库允许你自由试验各种改变，而不影响原始的项目 
一般来说，fork 被用于去更改别人的项目（贡献代码给已经开源的项目）或者使用别人的项目作为你 
自己想法的初始开发点 
使用 fork 提出改变的一个很好的例子是漏洞修复。与其记录一个你发现的问题，例如： 
fork 这个仓库 
进行修复 
向这个项目的拥有者提交一个 pull requset 
如果这个项目的拥有者认同你的成果，他们可能会将你的修复更新到原始的仓库中！ 
目前很多开源项目，采用 fork + pull request 的方式，实现新功能的开发，Code Review 等等
## 14.Fork 和 Clone 有什么区别
Clone ，不是 Fork ，克隆是个对某个远程仓库的本地拷贝。克隆时，实际上是拷贝整个源存储仓库， 
包括所有历史记录和分支 
## 15.Git 服务器
公有服务方案 
Github 
Gitee 
私有化部署方案 
GitLab 
Gogs 
Bitbucket 
一般情况下，大多数公司使用 GitLab 作为 Git 服务器 
GitLab是一个利用 Ruby on Rails 开发的开源应用程序，实现一个自托管的Git项目仓库，可通过 
Web界面进行访问公开的或者私人项目。 
它拥有与Github类似的功能，能够浏览源代码，管理缺陷和注释。可以管理团队对仓库的访问，它非常 
易于浏览提交过的版本并提供一个文件历史库。它还提供一个代码片段收集功能可以轻松实现代码复 
用，便于日后有需要的时候进行查找。
