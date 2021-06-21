new Vue({
    el: '#app',
    data: {
        logo: 'ZhangYao',
        drawer: false,
        navs: [
            { id: '1', text: '基本资料', key: 'info' },
            { id: '2', text: '专业技能', key: 'skill' },
            { id: '3', text: '项目经理', key: 'works' },
            { id: '4', text: '工作履历', key: 'resume' },
            { id: '5', text: '自我评价', key: 'evaluate' },
            { id: '6', text: '联系方式', key: 'touch' },
        ],
        infos: [
            { id: '1', title: '姓名/张耀', cont: '姓名:张耀\n常驻地：驻马店市', style: 'el-icon-s-custom' },
            { id: '2', title: '学历/本科', cont: '专业：计算机科学\n学历：大学本科', style: 'el-icon-s-platform' },
            { id: '3', title: '专业/计算机', cont: '毕业学校：南阳师范大学', style: 'el-icon-s-data' },
            { id: '4', title: '坐标/驿城区', cont: '电话：13353871335', style: 'el-icon-s-comment' },
        ],
        resumes: [
            { id: '1', date: '2018/05/01 - 至今', name: '伟宁保险代理有限公司', cont: '基于php,mysql,jq,vue等相关框架，独立开发web内部OA系统，包含信息管理系统，理赔系统，出单系统，财务系统，影像系统等;', img: 'weining.jpg' },
            { id: '2', date: '2016/10/01 - 2018/05/01', name: '中国网库集团公司', cont: 'B2B电商平台运营，网店装修设计，数据分析', img: 'wangku.jpg' },
            { id: '3', date: '2015/05/01 - 2016/09/01', name: '四维印象传媒有限公司', cont: '自主创业，广告制作，企业网站搭建，微信公众号运营', img: 'siwei.jpg' },
            { id: '4', date: '2014/07/01 - 2015/05/01', name: '新蔡在线传媒有限公司', cont: '微信公众平台及门户网站的运营与维护，广告资源的平面设计', img: 'xincai.jpg' },
            { id: '5', date: '2013/09/01 - 2014/06/01', name: '南方数码科技有限公司', cont: '毕业实习，维护服务器，局域网，办公系统的正常运转。', img: 'nanfang.jpg' },
        ],
        skills: [
            { id: '1', name: 'HTML/CSS', num: 90 },
            { id: '2', name: 'JS/JQuery', num: 85 },
            { id: '3', name: 'PHP/MYSQL', num: 85 },
            { id: '4', name: 'VUE/NODE/GIT', num: 70 },
        ],
        works: [
            { id: '1', img: 'img/001.jpg', str: '001.jpg' },
            { id: '2', img: 'img/002.jpg', str: '002.jpg' },
            { id: '3', img: 'img/003.jpg', str: '003.jpg' },
        ],
        workspic: [
            'img/001.jpg', 'img/002.jpg', 'img/003.jpg'
        ]
    },
    methods: {
        gocard(key) {
            $("html,body").animate({ scrollTop: $("#" + key).offset().top - 60 }, 500);
        },
        mgocard(key) {
            this.gocard(key);
            this.drawer = false;
        },
        toCall() {
            window.location.href = 'tel:133-5387-1335';
        }
    }
})