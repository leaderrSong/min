export const zhNavbar = [
    //单层
    {
        text: '主页',
        link: '/',
        // 该元素将一直处于激活状态
        activeMatch: '/',
    },
    //两层嵌套
    {
        text: '学习',
        children:
            [
                {
                    text: '程序',
                    children:
                        [
                            { text: 'C', link: 'https://code.iglooblog.top/c/1.html' },
                            { text: 'Js', link: '/js/' }
                        ]
                },
                {
                    text: '标记',
                    children:
                        [
                            { text: 'HTML', link: 'https://code.iglooblog.top/html/1.html' },
                            { text: 'Markdown', link: 'https://1m29yg5p67.k.topthink.com/@markdown' },
                            { text: 'CSS', link: 'https://code.iglooblog.top/css/1.html' }
                        ]
                },
            ],
    },
    //多个条目
    {
        text: '工具',
        children: [
            { text: '政治', link: 'politics' },
            { text: '英语', link: 'english' }
        ],
    },
    {
        text: '关于',
        link: '/about',
    },
    
    // 字符串 - 页面文件路径
    // '/Guide/README.md',
]
