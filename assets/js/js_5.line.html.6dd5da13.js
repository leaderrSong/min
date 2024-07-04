"use strict";(self.webpackChunkmy_vuepress_site=self.webpackChunkmy_vuepress_site||[]).push([[619],{936:(a,e,n)=>{n.r(e),n.d(e,{comp:()=>s,data:()=>t});var l=n(641);const i=[(0,l.Fv)('<h1 id="_5-多线程" tabindex="-1"><a class="header-anchor" href="#_5-多线程"><span>5.多线程</span></a></h1><h2 id="_01-多线程创建有哪些方式-🌹" tabindex="-1"><a class="header-anchor" href="#_01-多线程创建有哪些方式-🌹"><span>01.多线程创建有哪些方式？🌹</span></a></h2><p>一、重写 Thread (si red)类的 run() 方法。 二、实现 Runnable 接口，重写 run() 方法。 三、使用匿名内部类方式创建Runnable实例 四、实现 Callable (kɔːləbəl)接口，重写 call() 方法。 （使用 FutureTask 类创建线程 ） <strong>Runnable 与 Callable的区别:</strong> (1)Callable规定的方法是call(),Runnable规定的方法是run(). <strong>(2)Callable的任务执行后可返回值，而Runnable的任务是不能返回值的</strong> (3)call方法可以抛出异常，run方法不可以 (4)运行Callable任务可以拿到一个Future对象，Future 表示异步计算的结果。(PS: 特别注意,executorService.submit(Runnable task) 也会返回future, 但是没有future的效果 )</p><h2 id="_02-并行是什么意思-与并发的区别是什么" tabindex="-1"><a class="header-anchor" href="#_02-并行是什么意思-与并发的区别是什么"><span>02.并行是什么意思，与并发的区别是什么</span></a></h2><p>并行：当系统有<strong>多个</strong>CPU时，当一个CPU执行一个进程时，另一个CPU可以执行另一个进程，两个进程互不抢占CPU资源，可以同时进行，这种方式我们称之为并行</p><h2 id="并发和并行的区别" tabindex="-1"><a class="header-anchor" href="#并发和并行的区别"><span>并发和并行的区别</span></a></h2><p>并发，指的是多个事情，在同一时间段内同时发生了。 并行，指的是多个事情，在同一时间点上同时发生了。 并发的多个任务之间是互相抢占资源的。 并行的多个任务之间是不互相抢占资源的、 只有在多CPU的情况中，才会发生并行。否则，看似同时发生的事情，其实都是并发执行的。 <img src="https://cdn.nlark.com/yuque/0/2022/png/29328785/1660727505405-985bfd03-b322-43cd-98a8-6340e08ef8cb.png#averageHue=%23fbfbf7&amp;clientId=u491e0478-f21d-4&amp;from=paste&amp;height=450&amp;id=u45d304ab&amp;originHeight=563&amp;originWidth=753&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=276652&amp;status=done&amp;style=none&amp;taskId=u0a356d06-18d0-4635-8d20-2a8ae2a7280&amp;title=&amp;width=602.4#averageHue=%23fbfbf7&amp;id=tCgQ8&amp;originHeight=563&amp;originWidth=753&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none" alt=""><strong>比喻：</strong> 并发： 我们两个人在吃午饭。你在吃饭的整个过程中，吃了米饭、吃了蔬菜、吃了牛肉。吃米饭、吃蔬菜、吃牛肉这三件事其实就是并发执行的。对于你来说，整个过程中看似是同时完成的的。但其实你是在吃不同的东西之间来回切换的。 并行： 还是我们两个人吃午饭。在吃饭过程中，你吃了米饭、蔬菜、牛肉。我也吃了米饭、蔬菜和牛肉。我们两个人之间的吃饭就是并行的。两个人之间可以在同一时间点一起吃牛肉，或者一个吃牛肉，一个吃蔬菜。之间是互不影响的。</p><h2 id="_03-什么是线程-什么是进程-为什么要有线程-有什么关系与区别" tabindex="-1"><a class="header-anchor" href="#_03-什么是线程-什么是进程-为什么要有线程-有什么关系与区别"><span>03.什么是线程，什么是进程，为什么要有线程，有什么关系与区别</span></a></h2><h4 id="进程-我们把运行中的程序叫做进程-每个进程都会占用内存与cpu资源-进程与进程之间互相独立" tabindex="-1"><a class="header-anchor" href="#进程-我们把运行中的程序叫做进程-每个进程都会占用内存与cpu资源-进程与进程之间互相独立"><span>进程 我们把运行中的程序叫做进程,每个进程都会占用内存与CPU资源,进程与进程之间互相独立</span></a></h4><p><strong>线程 线程就是进程中的一个执行单元，负责当前进程中程序的执行。一个进程可以包含多个线程。一个进程包含了多个线程就是多线程。多线程可以提高程序的并行运行效率。是操作系统能够进行运算调度的最小单位。它被包含在进程之中，是进程中的实际运作单位。</strong> 程序是含有指令和数据的文件，被存储在磁盘或其他的数据存储设备中，也就是说程序是静态的代码。</p><h4 id="进程" tabindex="-1"><a class="header-anchor" href="#进程"><span>进程：</span></a></h4><ul><li>程序执行时的一个实例</li><li>每个进程都有独立的内存地址空间</li><li>系统进行资源分配和调度的基本单位</li><li>进程里的堆，是一个进程中最大的一块内存，被进程中的所有线程共享的，进程创建时分配，主要存放 new 创建的对象实例</li><li>进程里的方法区，是用来存放进程中的代码片段的，是线程共享的</li><li>在多线程 OS 中，进程不是一个可执行的实体，即一个进程至少创建一个线程去执行代码</li></ul><h4 id="线程" tabindex="-1"><a class="header-anchor" href="#线程"><span>线程：</span></a></h4><p>进程的一个执行路径 <strong>CPU 调度和分派的基本单位</strong> 线程本身是不会独立存在 当前线程 CPU 时间片用完后，会让出 CPU 等下次轮到自己时候在执行 系统<strong>不会为线程分配内存</strong>，线程组之间只能共享所属进程的资源 每个线程有自己的栈资源，用于存储该线程的局部变量和调用栈帧，其它线程无权访问</p><h4 id="为什么要有线程" tabindex="-1"><a class="header-anchor" href="#为什么要有线程"><span>为什么要有线程：</span></a></h4><p>每个进程都有自己的地址空间，即进程空间。一个服务器通常需要接收大量并发请求，为每一个请求都创建一个进程系统开销大、请求响应效率低，因此操作系统引进线程。</p><h4 id="进程与线程的关系" tabindex="-1"><a class="header-anchor" href="#进程与线程的关系"><span>进程与线程的关系：</span></a></h4><p>一个程序至少一个进程，一个进程至少一个线程，进程中的多个线程是共享进程的资源</p><h4 id="区别" tabindex="-1"><a class="header-anchor" href="#区别"><span>区别：</span></a></h4><p>本质： 进程是操作系统资源分配的基本单位；线程是任务调度和执行的基本单位 调度和切换： 线程上下文切换比进程上下文切换快，代价小 执行过程： 每个进程都有一个程序执行的入口，顺序执行序列；线程不能够独立执行，必须依存在应用程序中，由程序的多线程控制机制控制 健壮性： 每个进程之间的资源是独立的，当一个进程崩溃时，不会影响其他进程；同一进程的线程共享此线程的资源，当一个线程发生崩溃时，此进程也会发生崩溃，稳定性差，容易出现共享与资源竞争产生的各种问题，如死锁等 可维护性： 线程的可维护性，代码也较难调试，bug 难排查 <strong>进程与线程的选择</strong> 需要频繁创建销毁的优先使用线程。因为进程创建、销毁一个进程代价很大，需要不停的分配资源；线程频繁的调用只改变 CPU 的执行 线程的切换速度快，需要大量计算，切换频繁时，用线程 耗时的操作使用线程可提高应用程序的响应 线程对 CPU 的使用效率更优，多机器分布的用进程，多核分布用线程 需要跨机器移植，优先考虑用进程 需要更稳定、安全时，优先考虑用进程 需要速度时，优先考虑用线程 并行性要求很高时，优先考虑用线程</p><h2 id="_04-什么是并发编程-为什么要用并发编程" tabindex="-1"><a class="header-anchor" href="#_04-什么是并发编程-为什么要用并发编程"><span>04.什么是并发编程，为什么要用并发编程</span></a></h2><p>并发：<br> 多个任务可以在同一时间段内同时执行，看起来是同时运行，其实并不是同时运行，由于CPU的快速切换，任意一个时刻点上，只有一个任务在执行 用编程语言编写让计算机可以在一个时间段内执行多个任务的程序。 为什么使用并发编程：<br> &quot;摩尔定律&quot; 失效，硬件的单元计算能力提升受限；硬件上提高了 CPU 的核数和个数。并发编程可以提 升 CPU 的计算能力的利用率。 <strong>提升程序的性能</strong>，如：响应时间、吞吐量、计算机资源使用率等。 并发程序可以更好地处理复杂业务，对复杂业务进行多任务拆分，简化任务调度，同步执行任务。</p><h2 id="_05-并发编程的缺点" tabindex="-1"><a class="header-anchor" href="#_05-并发编程的缺点"><span>05.并发编程的缺点</span></a></h2><p>1、Java 中的线程对应是操作系统级别的线程，线程数量控制不好，频繁的创建、销毁线程和线程间的切换，比较消耗内存和时间。 2、容易带来线程安全问题。如线程的可见性、有序性、原子性问题，会导致程序出现的结果与预期结果不一致。 3、多线程容易造成死锁、活锁、线程饥饿等问题。此类问题往往只能通过手动停止线程、甚至是进程才能解决，影响严重。 4、对编程人员的技术要求较高，编写出正确的并发程序并不容易。 5、并发程序易出问题，且难调试和排查；问题常常诡异地出现，又诡异地消失。</p><h2 id="_06-导致并发程序出现问题的根本原因是什么" tabindex="-1"><a class="header-anchor" href="#_06-导致并发程序出现问题的根本原因是什么"><span>06.导致并发程序出现问题的根本原因是什么</span></a></h2><p>CPU、内存、IO 设备的读写速度差异巨大，表现为 CPU 的速度 &gt; 内存的速度 &gt; IO 设备的速度。 程序的性能瓶颈在于速度最慢的 IO 设备的读写，也就是说当涉及到 IO 设备的读写，再怎么提升 CPU 和内存的速度也是起不到提升性能的作用。 <strong>为了更好地利用 CPU 的高性能</strong> 计算机体系结构，给 CPU 增加了缓存，均衡 CPU 和内存的速度差异 操作系统，增加了进程与线程，分时复用 CPU，均衡 CPU 和 IO 设备的速度差异 编译器，增加了指令执行重排序，更好地利用缓存，提高程序的执行速度</p><h2 id="_07-java程序中怎么保证多线程的支行安全" tabindex="-1"><a class="header-anchor" href="#_07-java程序中怎么保证多线程的支行安全"><span>07.Java程序中怎么保证多线程的支行安全</span></a></h2><p>线程的安全性问题体现在：<br> 原子性：一个或者多个操作在 CPU 执行的过程中不被中断的特性 可见性：一个线程对共享变量的修改，另外一个线程能够立刻看到 有序性：程序执行的顺序按照代码的先后顺序执行 导致原因：<br> 线程切换带来的原子性问题 缓存导致的可见性问题 编译优化带来的有序性问题 解决办法：<br> JDK Atomic开头的原子类、synchronized、LOCK，可以解决原子性问题 synchronized、volatile、LOCK，可以解决可见性问题 Happens-Before 规则可以解决有序性问题</p><h2 id="_08-如何优雅的停止一个线程" tabindex="-1"><a class="header-anchor" href="#_08-如何优雅的停止一个线程"><span>08.如何优雅的停止一个线程</span></a></h2><p><strong>线程终止有两种情况：</strong></p><ol><li>线程的任务执行完成</li><li>线程在执行任务过程中发生异常</li></ol><p>这两者属于线程自行终止，如何让线程 A 把线程 B 终止呢？ Java 中 Thread 类有一个 stop() 方法，可以终止线程，不过这个方法会让线程直接终止，在执行 的任务立即终止，未执行的任务无法反馈，所以 stop() 方法已经不建议使用。 既然 stop() 方法如此粗暴，不建议使用，我们如何优雅地结束线程呢？ 线程只有从 runnable 状态（可运行/运行状态） 才能进入terminated 状态（终止状态），如果线 程处于 blocked、waiting、timed_waiting 状态（休眠状态），就需要通过 Thread 类的 interrupt() 方法，让线程从休眠状态进入 runnable 状态，从而结束线程。 当线程进入 runnable 状态之后，通过设置一个标识位，线程在合适的时机，检查该标识位，发现符<br> 合终止条件，自动退出 run () 方法，线程终止。</p><h2 id="_09-线程包括哪些状态-状态之间是如何变化的" tabindex="-1"><a class="header-anchor" href="#_09-线程包括哪些状态-状态之间是如何变化的"><span>09.线程包括哪些状态，状态之间是如何变化的</span></a></h2><h3 id="java-中线程的生命周期" tabindex="-1"><a class="header-anchor" href="#java-中线程的生命周期"><span>Java 中线程的生命周期</span></a></h3><p>线程的状态以及状态之间的相互转换： 　 1、新建状态(New)： 新创建了一个线程对象。 　　 2、就绪状态(Runnable)： 线程对象创建后，其他线程调用了该对象的start()方法。该状态的线程位于可运行线程池中，变得可运行，等待获取CPU的使用权。 　　 3、运行状态(Running)： 就绪状态的线程获取了CPU，执行程序代码。 　　 4、阻塞状态(Blocked)： 阻塞状态是线程因为某种原因放弃CPU使用权，暂时停止运行。直到线程进入就绪状态，才有机会转到运行状态。 5、死亡状态(Dead)： 线程执行完了或者因异常退出了run()方法，该线程结束生命周期。等待被销毁。</p><h3 id="java-中线程的状态的转变" tabindex="-1"><a class="header-anchor" href="#java-中线程的状态的转变"><span>Java 中线程的状态的转变</span></a></h3><h4 id="_1-new-到-runnable-状态" tabindex="-1"><a class="header-anchor" href="#_1-new-到-runnable-状态"><span><strong>1. NEW 到 RUNNABLE 状态</strong></span></a></h4><p>Java 刚创建出来的 Thread 对象就是 NEW 状态，不会被操作系统调度执行。从 NEW 状态转变到 RUNNABLE 状态调用线程对象的 start() 方法就可以了。</p><h4 id="_2-runnable-与-blocked-的状态转变" tabindex="-1"><a class="header-anchor" href="#_2-runnable-与-blocked-的状态转变"><span><strong>2. RUNNABLE 与 BLOCKED 的状态转变</strong></span></a></h4><p><strong>synchronized</strong> 修饰的方法、代码块同一时刻只允许一个线程执行，其他线程只能等待，等待的线程会从 RUNNABLE 转变到 BLOCKED 状态。 当等待的线程获得 <strong>synchronized 隐式锁</strong>时，就又会从 BLOCKED 转变到 RUNNABLE 状态。 在操作系统层面，线程是会转变到休眠状态的，但是<strong>在 JVM 层面</strong>，Java 线程的状态不会发生变化，即 Java 线程的状态会保持 RUNNABLE 状态。JVM 层面并不关心操作系统调度相关的状态，因为在 JVM 看来，等待 CPU 使用权（操作系统层面处于可执行状态）与等待 I/O（操作系统层面处于休眠状态）没有区别，都是在等待某个资源，都归入了 RUNNABLE 状态。 Java 在调用阻塞式 API 时，线程会阻塞，指的是操作系统线程的状态，并不是 Java 线程的状态。</p><h4 id="_3-runnable-与-waiting-的状态转变" tabindex="-1"><a class="header-anchor" href="#_3-runnable-与-waiting-的状态转变"><span><strong>3. RUNNABLE 与 WAITING 的状态转变</strong></span></a></h4><p>获得 synchronized 隐式锁的线程，调用无参数的 Object.wait() 方法，状态会从 RUNNABLE 转变到 WAITING；调用 Object.notify()、Object.notifyAll() 方法，线程可能从 WAITING 转变到 RUNNABLE 状态。 调用无参数的 Thread.join() 方法。join() 是一种线程同步方法，如有一线程对象 Thread t，当调用 t.join() 的时候，执行代码的线程的状态会从 RUNNABLE 转变到 WAITING，等待 thread t 执行完。当线程 t 执行完，等待它的线程会从 WAITING 状态转变到 RUNNABLE 状态。 调用 LockSupport.park() 方法，线程的状态会从 RUNNABLE 转变到 WAITING；调用 LockSupport.unpark(Thread thread) 可唤醒目标线程，目标线程的状态又会从 WAITING 转变为 RUNNABLE 状态。</p><h4 id="_4-runnable-与-timed-waiting-的状态转变" tabindex="-1"><a class="header-anchor" href="#_4-runnable-与-timed-waiting-的状态转变"><span><strong>4. RUNNABLE 与 TIMED_WAITING 的状态转变</strong></span></a></h4><ul><li>Thread.sleep(long millis)</li><li>Object.wait(long timeout)</li><li>Thread.join(long millis)</li><li>LockSupport.parkNanos(Object blocker, long deadline)</li><li>LockSupport.parkUntil(long deadline)</li></ul><p>TIMED_WAITING 和 WAITING 状态的区别，仅仅是调用的是超时参数的方法。</p><h4 id="_5-runnable-到-terminated-状态" tabindex="-1"><a class="header-anchor" href="#_5-runnable-到-terminated-状态"><span><strong>5. RUNNABLE 到 TERMINATED 状态</strong></span></a></h4><ul><li>线程执行完 run() 方法后，会自动转变到 TERMINATED 状态</li><li>执行 run() 方法时异常抛出，也会导致线程终止</li><li><s>Thread类的 stop() 方法已经不建议使用</s></li></ul><h2 id="_10-在-java-中-wait-和-sleep-方法的不同" tabindex="-1"><a class="header-anchor" href="#_10-在-java-中-wait-和-sleep-方法的不同"><span>10.在 java 中 wait 和 sleep 方法的不同？</span></a></h2><p>最大的不同是在等待时 wait 会释放锁，而 sleep 一直持有锁。wait 通常 被用于线程间交互， sleep 通常被用于暂停执行。</p><h2 id="_11-线程池原理" tabindex="-1"><a class="header-anchor" href="#_11-线程池原理"><span>11.线程池原理</span></a></h2><p>线程池做的工作主要是控制运行的线程的数量，处理过程中将任务放入队 列，然后在线程创建后启动这些任务，如果线程数量超过了最大数量超出数量的 线程排队等候，等其它线程执行完毕，再从队列中取出任务来执行。他的主要特 点为：线程复用；控制最大并发数；管理线程。 **线程复用: ** 每一个 Thread 的类都有一个 start 方法。 当调用 start 启动线程时 Java 虚拟机会调用该类的 run 方法。 那么该类的 run() 方法中就是调用了 Runnable 对象的 run() 方法。 我们可以继承重写 Thread 类，在其 start 方法中添加不断循环调用传递过来的 Runnable对象。 这就是线程池的实现 原理。循环方法中不断获取 Runnable 是用 Queue 实现的，在获取下一个 Runnable 之前可以是阻塞的。 **线程池的组成: ** 一般的线程池主要分为以下 4 个组成部分： 1. 线程池管理器：用于创建并管理线程 池 2. 工作线程：线程池中的线程 3. 任务接口：每个任务必须实现的接口，用于工作线程调度其运行 4. 任务队列：用于存放待处理的任务，提供一种缓冲机制 <strong>拒绝策略</strong>: 线程池中的线程已经用完了，无法继续为新任务服务，同时，等待队列也已 经排满了，再也 塞不下新任务了。这时候我们就需要拒绝策略机制合理的处理这 个问题。 **JDK 内置的拒绝策略如下： **</p><ol><li>AbortPolicy ： 直接抛出异常，阻止系统正常运行。</li><li>CallerRunsPolicy ： 只要线程池未关闭，该策略直接在调用者线程中， 运行当前被丢弃的任务。显然这样做不会真的丢弃任务，但是，任务提交线程的 性能极有可能会急剧下降。</li><li>DiscardOldestPolicy ： 丢弃最老的一个请求，也就是即将被执行的一 个任务，并尝试再次提交当前任务。</li><li>DiscardPolicy ： 该策略默默地丢弃无法处理的任务，不予任何处理。 如果允许任务丢失，这是最好的一种方案</li></ol><h2 id="_12-线程执行的顺序" tabindex="-1"><a class="header-anchor" href="#_12-线程执行的顺序"><span>12.线程执行的顺序</span></a></h2><ol><li>当线程数小于核心线程数时，会一直创建线程直到线程数等于核心线程数；</li><li>当线程数等于核心线程数时，新加入的任务会被放到任务队列等待执行；</li><li>当任务队列已满，又有新的任务时，会创建线程直到线程数量等于最大线程 数；</li><li>当线程数等于最大线程数，且任务队列已满时，新加入任务会被拒绝。</li></ol><h2 id="_13-线程池的核心参数有哪些" tabindex="-1"><a class="header-anchor" href="#_13-线程池的核心参数有哪些"><span>13.线程池的核心参数有哪些</span></a></h2><p>** 1.corePoolSize（核心线程数） ** （1）核心线程会一直存在，即使没有任务执行； （2）当线程数小于核心线程数的时候，即使有空闲线程，也会一直创建线程直 到达到核心线程数； （3）设置 allowCoreThreadTimeout=true（默认 false）时，核心线程会超时关闭。 ** 2.queueCapacity（任务队列容量） **也叫阻塞队列，当核心线程都在运行，此时再有任务进来，会进入任务队列，排 队等待线程执行 ** 3.maxPoolSize（最大线程数） ** （1）线程池里允许存在的最大线程数量； 27 （2）当任务队列已满，且线程数量大于等于核心线程数时，会创建新的线程执 行任务； （3）线程池里允许存在的最大线程数量。当任务队列已满，且线程数量大于等 于核心线程数时,会创建新的线程执行任务。 ** 4.keepAliveTime（线程空闲时间） ** （1）当线程空闲时间达到 keepAliveTime 时，线程会退出（关闭），直到线程 数等于核心线程数； （2）如果设置了 allowCoreThreadTimeout=true，则线程会退出直到线程数 等于零。 &lt;allowCoreThreadTimeout（允许核心线程超时）&gt; 当线程数量达到最大线程数，且任务队列已满 时，会拒绝任务； 调用线程池 shutdown()方法后，会等待执行完线程池的任务之后，再shutdown()。如果在调用了 shutdown()方法和线程池真正 shutdown()之间提 交任务，会拒绝新任务</p><ol><li><strong>核心线程数</strong></li><li><strong>最大线程数</strong></li><li><strong>任务队列</strong></li><li><strong>线程存活时间</strong></li><li><strong>存活时间单位</strong></li><li><strong>threadFactory 线程工厂</strong></li><li><strong>handler 拒绝策略</strong></li></ol><h2 id="_15-死锁产生的条件以及如何避免" tabindex="-1"><a class="header-anchor" href="#_15-死锁产生的条件以及如何避免"><span>15.死锁产生的条件以及如何避免</span></a></h2><p>** 死锁 : **多个线程都在阻塞等待同一个资源，而这个资源是不可获取的，这些线程无限期的等待 <strong>死锁产生的四个必要条件</strong>： 互斥：一个资源每次只能被一个进程使用（资源独立）。 请求与保持：一个进程因请求资源而阻塞时，对已获得的资源保持不放（不 释放锁）。 不剥夺：进程已获得的资源，在未使用之前，不能强行剥夺（抢夺资源）。 循环等待：若干进程之间形成一种头尾相接的循环等待的资源关闭（死循环）。 ** 解决方法： **破坏其中任意一个条件即可，相对而言，破坏循环等待最容易，就是进行锁排序，明确线程都得先加A锁再加B锁 ** 1. 破坏”互斥”条件： **系统里取消互斥、若资源一般不被一个进程独占使用， 那么死锁是肯定不会发生 的，但一般“互斥”条件是无法破坏的,因此，在死锁 预防里主要是破坏其他三个必要条件，而不去涉及 破坏“互斥”条件。 ** 2. 破坏“请求和保持”条件： ** ** 方法 1： **所有的进程在开始运行之前，必须一次性的申请其在整个运行过程 各种所需要的全部资 源。 优点：简单易实施且安全。 缺点：因为某项资源不满足，进程无法启动，而其他已经满足了的资源 也不会得到利用，严重 降低了资源的利用率，造成资源浪费。 ** 方法 2： **该方法是对第一种方法的改进，允许进程只获得运行初期需要的资 源，便开始运行，在 运行过程中逐步释放掉分配到，已经使用完毕的资源，然后 再去请求新的资源。这样的话资源的利用率会得到提高，也会减少进程的饥饿问 题。 <strong>3. 破坏“不剥夺”条件</strong>：当一个已经持有了一些资源的进程在提出新的资源 请求没有得到满足时，它必 须释放已经保持的所有资源，待以后需要使用的时候 再重新申请。这就意味着进程已占有的资源会被短暂的释放或者说被抢占了。 <strong>4. 破坏“循环等待”条件</strong>：可以通过定义资源类型的线性顺序来预防，可以将每个资源编号，当一个进程占有编号为 i 的资源时，那么它下一次申请资源只 能申请编号大于 i 的资源。</p><h2 id="_16-线程池的创建方式" tabindex="-1"><a class="header-anchor" href="#_16-线程池的创建方式"><span>16. 线程池的创建方式</span></a></h2><ul><li>通过 ThreadPoolExecutor 手动创建线程池。</li><li>通过 Executors 执行器自动创建线程池。</li></ul><h2 id="_17-多线程应用场景" tabindex="-1"><a class="header-anchor" href="#_17-多线程应用场景"><span>17. 多线程应用场景</span></a></h2><p>任务量比较大，通过多线程可以提高效率时,需要异步处理时,占用系统资源，造成阻塞的工作时,都可以采用多线程提高效率</p><ul><li>后台任务：如定时向大量(100W以上)的用户发送短信；</li><li>定期更状态、任务调度(如quartz)，100W的用户数据清洗，每隔1S运行一次清洗，从集合中取得一部分数据进行处理</li><li>日志收集：采用MQ的方式进行处理【数据埋点】</li><li>自动作业处理：比如数据迁移，数据处理</li><li>异步处理：如发课程【图片审核、文章审核】、更新课程的索引</li><li>多步骤的任务处理，可根据步骤特征选用不同个数和特征的线程来协作处理，多任务的分割，由一个主线程分割给多个线程完成【并行结算】</li></ul><h2 id="_18-线程池-四种拒绝策略" tabindex="-1"><a class="header-anchor" href="#_18-线程池-四种拒绝策略"><span>18. 线程池-四种拒绝策略</span></a></h2><ul><li>** AbortPolicy -** 抛出异常，中止任务。抛出拒绝执行 RejectedExecutionException 异常信息。线程池默认的拒绝策略。必须处理好抛出的异常，否则会打断当前的执行流程，影响后续的任务执行</li><li>** CallerRunsPolicy **- 使用调用线程执行任务。当触发拒绝策略，只要线程池没有关闭的话，则使用调用线程直接运行任务。一般并发比较小，性能要求不高，不允许失败。但是，由于调用者自己运行任务，如果任务提交速度过快，可能导致程序阻塞，性能效率上必然的损失较大</li><li><strong>DiscardPolicy</strong>- 直接丢弃，其他啥都没有</li><li><strong>DiscardOldestPolicy</strong>- 丢弃队列最老任务，添加新任务。当触发拒绝策略，只要线程池没有关闭的话，丢弃阻塞队列 workQueue 中最老的一个任务，并将新任务加入</li></ul><h1 id="锁🔒" tabindex="-1"><a class="header-anchor" href="#锁🔒"><span>锁🔒</span></a></h1><h2 id="_01-公平锁、非公平锁、可重入锁、独占锁" tabindex="-1"><a class="header-anchor" href="#_01-公平锁、非公平锁、可重入锁、独占锁"><span>01. 公平锁、非公平锁、可重入锁、独占锁</span></a></h2><p><strong>公平锁</strong>是指在分配时候考虑线程排队等待的情况，优先将该锁分配给排队时间最长的线程 <strong>非公平锁</strong>指在分配时候不考虑线程排队等待的情况，直接尝试获得锁，在获取不到锁时候再排队，到队尾等待 <strong>可重入锁</strong>也叫** 递归锁， **指在同一个线程中，在外层函数获得该锁之后，内层的递归函数依旧可以继续获取该锁 <strong>独占锁</strong>指该锁在同一个时间只能被同一个线程获得，而获得锁的其他线程只能在同步队列中等待</p><h2 id="_2-synchronized实现原理" tabindex="-1"><a class="header-anchor" href="#_2-synchronized实现原理"><span>2. synchronized实现原理</span></a></h2><p>Synchronized可以修饰普通方法、同步方法块、静态方法；</p><ul><li>普通方法锁是当前实例对象</li><li>静态方法锁是当前类的Class对象</li><li>同步方法块锁是Synchonized配置的对象； 用的锁是存在对象头里的,<strong>根据mark word的锁状态来判断锁</strong>，如果锁只被同一个线程持有使用的是偏向锁，不同线程互相交替持有锁使用轻量级锁，多线程竞争使用重量级锁。<strong>锁会按偏向锁(单线程持有)-&gt;轻量级锁(两线程竞争)-&gt;重量级锁(多线程竞争)升级，称为锁膨胀</strong></li></ul><h2 id="_3、synchronized和lock有什么区别" tabindex="-1"><a class="header-anchor" href="#_3、synchronized和lock有什么区别"><span>3、synchronized和lock有什么区别</span></a></h2><p>1、lock是一个接口，而synchronized是java的一个关键字。2、synchronized在发生异常时会自动释放占有的锁，因此不会出现死锁；而lock发生异常时，不会主动释放占有的锁，必须手动来释放锁，可能引起死锁的发生。 ** synchronized原始采用的是CPU悲观锁机制，即线程获得的是独占锁。 **独占锁意味着其他线程只能依靠阻塞来等待线程释放锁。而在CPU转换线程阻塞时会引起线程上下文切换，当有很多线程竞争锁的时候，会引起CPU频繁的上下文切换导致效率很低。 <strong>而Lock用的是乐观锁方式。所谓乐观锁就是，每次不加锁而是假设没有冲突而去完成某项操作，如果因为冲突失败就重试，直到成功为止。乐观锁实现的机制就是CAS操作</strong>（Compare and Swap）。我们可以进一步研究ReentrantLock的源代码，会发现其中比较重要的获得锁的一个方法是compareAndSetState。这里其实就是调用的CPU提供的特殊指令。</p><h2 id="_4-自旋锁、自适应自旋、锁消除、锁粗化、轻量级锁、偏向锁、重量级锁概念" tabindex="-1"><a class="header-anchor" href="#_4-自旋锁、自适应自旋、锁消除、锁粗化、轻量级锁、偏向锁、重量级锁概念"><span>4. 自旋锁、自适应自旋、锁消除、锁粗化、轻量级锁、偏向锁、重量级锁概念</span></a></h2><p>自旋锁：开启线程执行一个忙循环，直到需要更新的值为期待值为止 自适应自旋：自旋时间不再固定，由前一次在同一个锁上的自旋时间及锁的拥有者状态来决定，比如在同一个锁对象上，自旋等待刚刚成功获得过锁，并且持有锁的线程正在运行中，那么虚拟机就会认为这次自旋也很有可能再次成功，进而它将自旋等待更长时间，以期望成功获取锁，如果很少成功获得过锁，那很可能会忽略掉自旋过程，以避免CPU资源浪费。 锁消除：JIT在运行时，对一些代码上要求同步，但是被检测到不可能存在共享数据竞争的锁进行消除 锁粗化：如果虚拟机探测到有一串零碎的操作都对同一个对象加锁，将会把加锁同步的范围扩展到整个序列的外部 轻量级锁：加锁是通过同步对象的对象头进行操作的，首先会在当前线程的栈帧中建立一个名为锁记录的空间，存储锁对象目前的Mark Word拷贝，会加Displaced前缀，然后通过CAS尝试将对象的Mark Word更新为指向Lock Record的指针，如果成功，就获得了该对象的锁，如果失败，会检查Mark Word是否指向当前线程的栈帧，如果是就说明已经获得了锁，如果没有就说明有其他线程抢占，轻量锁就会膨胀成重量级锁；解锁也是通过CAS来操作，就是将Mark Word 替换为原来的值 偏向锁：锁偏向于第一个获得它的线程，如果在接下来的执行过程中，该锁没有被其他的线程获取，则持有偏向锁的线程将永远不需要再同步。-XX:+UseBiasedLocking 开启偏向锁 重量级锁：也叫互斥锁，一种悲观锁，会阻塞线程，通过对象内部的monitor锁来实现，monitor锁依赖底层操作系统的MutexLock互斥锁来实现</p><h2 id="_5-悲观锁与乐观锁" tabindex="-1"><a class="header-anchor" href="#_5-悲观锁与乐观锁"><span>5. 悲观锁与乐观锁</span></a></h2><p><strong>1、悲观锁</strong> 顾名思义，就是比较悲观的锁，总是假设最坏的情况，每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会阻塞直到它拿到锁（共享资源每次只给一个线程使用，其它线程阻塞，用完后再把资源转让给其它线程）。传统的关系型数据库里边就用到了很多这种锁机制，比如行锁，表锁等，读锁，写锁等，都是在做操作之前先上锁。Java中synchronized和ReentrantLock等独占锁就是悲观锁思想的实现。 <strong>2、乐观锁</strong> 反之，总是假设最好的情况，每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在更新的时候会判断一下在此期间别人有没有去更新这个数据，可以使用版本号机制和CAS算法实现。乐观锁适用于多读的应用类型，这样可以提高吞吐量，像数据库提供的类似于write_condition机制，其实都是提供的乐观锁。在Java中java.util.concurrent.atomic包下面的原子变量类就是使用了乐观锁的一种实现方式CAS实现的。 <strong>二、悲观锁和乐观锁应用场景</strong> 从上面对两种锁的介绍，我们知道两种锁各有优缺点，不可认为一种好于另一种，像乐观锁适用于写比较少的情况下（多读场景），即冲突真的很少发生的时候，这样可以省去了锁的开销，加大了系统的整个吞吐量。但如果是多写的情况，一般会经常产生冲突，这就会导致上层应用会不断的进行retry，这样反倒是降低了性能，所以一般多写的场景下用悲观锁就比较合适。</p>',78)],r={},s=(0,n(262).A)(r,[["render",function(a,e){return(0,l.uX)(),(0,l.CE)("div",null,i)}]]),t=JSON.parse('{"path":"/js/5.line.html","title":"5.多线程","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"01.多线程创建有哪些方式？🌹","slug":"_01-多线程创建有哪些方式-🌹","link":"#_01-多线程创建有哪些方式-🌹","children":[]},{"level":2,"title":"02.并行是什么意思，与并发的区别是什么","slug":"_02-并行是什么意思-与并发的区别是什么","link":"#_02-并行是什么意思-与并发的区别是什么","children":[]},{"level":2,"title":"并发和并行的区别","slug":"并发和并行的区别","link":"#并发和并行的区别","children":[]},{"level":2,"title":"03.什么是线程，什么是进程，为什么要有线程，有什么关系与区别","slug":"_03-什么是线程-什么是进程-为什么要有线程-有什么关系与区别","link":"#_03-什么是线程-什么是进程-为什么要有线程-有什么关系与区别","children":[]},{"level":2,"title":"04.什么是并发编程，为什么要用并发编程","slug":"_04-什么是并发编程-为什么要用并发编程","link":"#_04-什么是并发编程-为什么要用并发编程","children":[]},{"level":2,"title":"05.并发编程的缺点","slug":"_05-并发编程的缺点","link":"#_05-并发编程的缺点","children":[]},{"level":2,"title":"06.导致并发程序出现问题的根本原因是什么","slug":"_06-导致并发程序出现问题的根本原因是什么","link":"#_06-导致并发程序出现问题的根本原因是什么","children":[]},{"level":2,"title":"07.Java程序中怎么保证多线程的支行安全","slug":"_07-java程序中怎么保证多线程的支行安全","link":"#_07-java程序中怎么保证多线程的支行安全","children":[]},{"level":2,"title":"08.如何优雅的停止一个线程","slug":"_08-如何优雅的停止一个线程","link":"#_08-如何优雅的停止一个线程","children":[]},{"level":2,"title":"09.线程包括哪些状态，状态之间是如何变化的","slug":"_09-线程包括哪些状态-状态之间是如何变化的","link":"#_09-线程包括哪些状态-状态之间是如何变化的","children":[{"level":3,"title":"Java 中线程的生命周期","slug":"java-中线程的生命周期","link":"#java-中线程的生命周期","children":[]},{"level":3,"title":"Java 中线程的状态的转变","slug":"java-中线程的状态的转变","link":"#java-中线程的状态的转变","children":[]}]},{"level":2,"title":"10.在 java 中 wait 和 sleep 方法的不同？","slug":"_10-在-java-中-wait-和-sleep-方法的不同","link":"#_10-在-java-中-wait-和-sleep-方法的不同","children":[]},{"level":2,"title":"11.线程池原理","slug":"_11-线程池原理","link":"#_11-线程池原理","children":[]},{"level":2,"title":"12.线程执行的顺序","slug":"_12-线程执行的顺序","link":"#_12-线程执行的顺序","children":[]},{"level":2,"title":"13.线程池的核心参数有哪些","slug":"_13-线程池的核心参数有哪些","link":"#_13-线程池的核心参数有哪些","children":[]},{"level":2,"title":"15.死锁产生的条件以及如何避免","slug":"_15-死锁产生的条件以及如何避免","link":"#_15-死锁产生的条件以及如何避免","children":[]},{"level":2,"title":"16. 线程池的创建方式","slug":"_16-线程池的创建方式","link":"#_16-线程池的创建方式","children":[]},{"level":2,"title":"17. 多线程应用场景","slug":"_17-多线程应用场景","link":"#_17-多线程应用场景","children":[]},{"level":2,"title":"18. 线程池-四种拒绝策略","slug":"_18-线程池-四种拒绝策略","link":"#_18-线程池-四种拒绝策略","children":[]},{"level":2,"title":"01. 公平锁、非公平锁、可重入锁、独占锁","slug":"_01-公平锁、非公平锁、可重入锁、独占锁","link":"#_01-公平锁、非公平锁、可重入锁、独占锁","children":[]},{"level":2,"title":"2. synchronized实现原理","slug":"_2-synchronized实现原理","link":"#_2-synchronized实现原理","children":[]},{"level":2,"title":"3、synchronized和lock有什么区别","slug":"_3、synchronized和lock有什么区别","link":"#_3、synchronized和lock有什么区别","children":[]},{"level":2,"title":"4. 自旋锁、自适应自旋、锁消除、锁粗化、轻量级锁、偏向锁、重量级锁概念","slug":"_4-自旋锁、自适应自旋、锁消除、锁粗化、轻量级锁、偏向锁、重量级锁概念","link":"#_4-自旋锁、自适应自旋、锁消除、锁粗化、轻量级锁、偏向锁、重量级锁概念","children":[]},{"level":2,"title":"5. 悲观锁与乐观锁","slug":"_5-悲观锁与乐观锁","link":"#_5-悲观锁与乐观锁","children":[]}],"git":{"updatedTime":1720069338000,"contributors":[{"name":"swp","email":"3297943361@qq.com","commits":1}]},"filePathRelative":"js/5.line.md"}')}}]);