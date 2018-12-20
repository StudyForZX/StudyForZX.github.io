/**
 * 每一级都可以有 submenu, group => el-menu-item-group, item => el-menu-item
 */
let submenus = [
    // 导航一
    {
        index: '1',
        title: '娱乐',
        icon: 'el-icon-location',
        groups: [
            {
                title: '分组一',
                items: [
                    {
                        index: '1-1',
                        title: '选项1',
                    },
                    {
                        index: '1-2',
                        title: '选项2',
                    },
                ]
            },
            {
                title: '分组二',
                items: [
                    {
                        index: '1-3',
                        title: '选项3',
                    },
                ]
            },
        ],
        submenus: [
            {
                index: '1-4',
                title: '选项4',
                item: [
                    {
                        index: '1-4-1',
                        title: '选项一',
                    }
                ]

            }
        ],
        items: [
            {
                title: '单独的项',
                index: '1-5',
            }
        ],

    },
    // 导航二
    {
        index: '2',
        title: '娱乐',
        icon: 'el-icon-location',
        groups: [
            {
                title: '分组一',
                items: [
                    {
                        index: '2-1',
                        title: '选项1',
                    },
                    {
                        index: '2-2',
                        title: '选项2',
                    },
                ]
            },
            {
                title: '分组二',
                items: [
                    {
                        index: '2-3',
                        title: '选项3',
                    },
                ]
            },
        ],
        submenus: [
            {
                index: '2-4',
                title: '选项4',
                item: [
                    {
                        index: '2-4-1',
                        title: '选项一',
                    }
                ]

            }
        ],
        items: [
            {
                title: '单独的项',
                index: '2-5',
            }
        ],

    },
    // 导航三
    {
        index: '3',
        title: '娱乐',
        icon: 'el-icon-location',
        groups: [
            {
                title: '分组一',
                items: [
                    {
                        index: '3-1',
                        title: '选项1',
                    },
                    {
                        index: '3-2',
                        title: '选项2',
                    },
                ]
            },
            {
                title: '分组二',
                items: [
                    {
                        index: '3-3',
                        title: '选项3',
                    },
                ]
            },
        ],
        submenus: [
            {
                index: '3-4',
                title: '选项4',
                item: [
                    {
                        index: '3-4-1',
                        title: '选项一',
                    }
                ]

            }
        ],
        items: [
            {
                title: '单独的项',
                index: '3-5',
            }
        ],

    }
]

export default {
    submenus,
}