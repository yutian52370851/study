<template>
    <Table :columns="columns1" :data="data1" :stripe="false" :show-header="false" :border="false" :highlight-row="false" :disabled-hover="true" style="border:none;"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: 'COURSERA',
                        key: 'coursera'
                    },
                    {
                        title: '社区',
                        key: 'community'
                    },
                    {
                        title: '连接',
                        key: 'connect'
                    },
                    {
                        title: '更多',
                        key: 'more'
                    }
                ],
                data1: [
                    {
                        coursera: '关于',
                        community: '合作伙伴',
                        connect: '博客',
                        more: '条款'
                    },
                    {
                        coursera: '管理团队',
                        community: '社区助教',
                        connect: 'Facebook',
                        more: '隐私'
                    },
                    {
                        coursera: '工作机会',
                        community: '专业译员',
                        connect: '领英',
                        more: '帮助'
                    },
                    {
                        coursera: '目录',
                        community: '开发者',
                        connect: 'Twitter',
                        more: '内容访问'
                    },
                    {
                        coursera: '证书',
                        community: 'Bata测试人',
                        connect: 'Google+',
                        more: '媒体'
                    },
                    {
                        coursera: '学位',
                        community: '',
                        connect: '技术博客',
                        more: '联系我们'
                    },
                    {
                        coursera: '商务',
                        community: '',
                        connect: '',
                        more: '目录'
                    },
                    {
                        coursera: '政府版',
                        community: '',
                        connect: '',
                        more: '附属公司'
                    }                  
                ]
            }
        }
    }
</script>
<style>
    .ivu-table:after {
    content: '';
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: white;
    z-index: 3;
    }
    .ivu-table td {
    background-color: #fff;
    transition: background-color .2s ease-in-out;
    border: none;
    }
</style>