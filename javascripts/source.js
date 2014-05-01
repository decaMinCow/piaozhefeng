var hoverEffect = true; // set true for hover effect, set false for no hover effect

var searchEngine = 'google'; // default search engine - set google for google search, bing for bing search, yahoo for yahoo search

var numberOfScreens = 2; // set number of screens (1 or 2 or 3)
 
var blockName = new Array(); // set names of blocks
blockName[1] = '常用';
blockName[2] = '消遣';
blockName[3] = 'News & fun';

var bookmark = new Array();
bookmark[0] = new Array();
bookmark[1] = new Array();
bookmark[2] = new Array();

// set your bookmarks here: (If you do not fill 'thumb' for thumbnail will be used title)
// FIRST BLOCK
bookmark[0][0] = {
	'title':'csdn',
	'url':'http://csdn.net',
	'thumb':'csdn.png'
};
bookmark[0][1] = {
	'title':'zhihu',
	'url':'http://zhihu.com',
	'thumb':'zhihu.png'
};
bookmark[0][2] = {
	'title':'youku',
	'url':'http://youku.com',
	'thumb':'youku.png'
};
bookmark[0][3] = {
	'title':'xweibo',
	'url':'http://weibo.com/',
	'thumb':'xweibo.png'
};
bookmark[0][4] = {
	'title':'fenghuangnews',
	'url':'http://ifeng.com/',
	'thumb':'fenghuang.png'
};
bookmark[0][5] = {
	'title':'google',
	'url':'http://google.com',
	'thumb':'google.png'
};
bookmark[0][6] = {
	'title':'guorenblog',
	'url':'http://blog.csdn.net/guoren12',
	'thumb':'blog.png'
};
bookmark[0][7] = {
	'title':'36kr',
	'url':'http://36kr.com',
	'thumb':'36kr.png'
};
bookmark[0][8] = {
	'title':'doubanfm',
	'url':'http://douban.fm',
	'thumb':'doubanfm.png'
};
bookmark[0][9] = {
	'title':'taobao',
	'url':'http://taobao.com',
	'thumb':'taobao.png'
};
bookmark[0][10] = {
	'title':'wikipedia',
	'url':'http://wikipedia.org',
	'thumb':'wikipedia.png'
};
bookmark[0][11] = {
	'title':'about',
	'url':'about/index.html',
	'thumb':'about.png'
};
// end of FIRST BLOCK
// SECOND BLOCK
bookmark[1][0] = {
	'title':'gizmodo',
	'url':'http://gizmodo.com/',
	'thumb':'gizmodo.png'
};
bookmark[1][1] = {
	'title':'flappy2048',
	'url':'http://flappy2048.com/',
	'thumb':'flappy2048.png'
};
bookmark[1][2] = {
	'title':'guokr',
	'url':'http://guokr.com/',
	'thumb':'guokr.png'
};
bookmark[1][3] = {
	'title':'read',
	'url':'http://read.org.cn/',
	'thumb':'read.png'
};
bookmark[1][4] = {
	'title':'ctrip',
	'url':'http://www.ctrip.com/',
	'thumb':'ctrip.png'
};
bookmark[1][5] = {
	'title':'renren',
	'url':'http://renren.com/',
	'thumb':'renren.png'
};
bookmark[1][6] = {
	'title':'douban',
	'url':'http://douban.com',
	'thumb':'douban.png'
};
bookmark[1][7] = {
	'title':'qiushibaike',
	'url':'http://qiushibaike.com/',
	'thumb':'qiushibaike.png'
};
bookmark[1][8] = {
	'title':'mtime',
	'url':'http://www.mtime.com/',
	'thumb':'mtime.png'
};
bookmark[1][9] = {
	'title':'meituan',
	'url':'http://meituan.com/',
	'thumb':'meituan.png'
};
bookmark[1][10] = {
	'title':'howstuffworks',
	'url':'http://howstuffworks.com/',
	'thumb':'howstuffworks.png'
};
bookmark[1][11] = {
	'title':'yuyin',
	'url':'http://yuyin.fm',
	'thumb':'yuyin.png'
};
//end of SECOND BLOCK
// THIRD BLOCK
bookmark[2][0] = {
	'title':'eurosport',
	'url':'http://www.eurosport.com/',
	'thumb':'eurosport.png'
};
bookmark[2][1] = {
	'title':'amazon',
	'url':'http://www.amazon.com/',
	'thumb':'amazon.png'
};
bookmark[2][2] = {
	'title':'eBay',
	'url':'http://www.ebay.com/',
	'thumb':'ebay.png'
};
bookmark[2][3] = {
	'title':'IMDb',
	'url':'http://www.imdb.com/',
	'thumb':'imdb.png'
};
bookmark[2][4] = {
	'title':'vimeo',
	'url':'http://vimeo.com',
	'thumb':'vimeo.png'
};
bookmark[2][5] = {
	'title':'lifehacker',
	'url':'http://lifehacker.com/',
	'thumb':'lifehacker.png'
};
bookmark[2][6] = {
	'title':'engadged',
	'url':'http://www.engadget.com/',
	'thumb':'engadget.png'
};
bookmark[2][7] = {
	'title':'zune',
	'url':'http://www.zune.net/',
	'thumb':'zune.png'
};
bookmark[2][8] = {
	'title':'dropbox',
	'url':'http://www.dropbox.com/',
	'thumb':'dropbox.png'
};
bookmark[2][9] = {
	'title':'National Geographic',
	'url':'http://www.nationalgeographic.com/',
	'thumb':'natgeo.png'
};
bookmark[2][10] = {
	'title':'CBC news',
	'url':'http://www.lanrentuku.com/',
	'thumb':'cbcnews.png'
};
bookmark[2][11] = {
	'title':'weather.com',
	'url':'http://www.weather.com/',
	'thumb':'weather.png'
};