/**
 * 每一级都可以有 submenu, group => el-menu-item-group, item => el-menu-item
 */
let config = [
    // 导航一
    {
        index: '1',
        title: '娱乐',
        items: [
            {
                title: '单独的项',
                index: '1-1',
            }
        ],
        submenus: [
            {
                index: '1-2',
                title: '选项4',
                items: [
                    {
                        index: '1-2-1',
                        title: '选项一',
                    }
                ]
            }
        ],
    },
]

export default config