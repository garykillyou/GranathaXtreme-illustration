// 首頁載入完成後綁定物件事件
$(document).ready(function () {
	/*
	$("#test").click(function () {
		alert("TEST");
	});
	*/
	$("#addRow").click(function () {
		alert("addRow");
		createTable();
	});

	$("#clearTable").click(function () {
		var gg = $(this);
		$(this).animate({
			fontSize: "200px"
		}, "slow", function () {
			test2(gg);
		});
	});
	/*
	$(".picGG").click(function() {
		$(this).animate({
			height:"500px"
		}, "slow");
	});
	*/
	$('[data-fancybox]').fancybox({
		protect: true
	});
});
// 首頁載入完成後綁定物件事件

// 選擇瑟堤納屬性事件
function clickPurple() {
	$.post("index_server.php", {
		color: "purple",
		name: "瑟堤納"
	}).always(function (data) {
		clearTable();
		$("#illustrations_table_title").after(data);
	});
}

// 選擇土尼勒屬性事件
function clickYellow() {
	$.post("index_server.php", {
		color: "yellow",
		name: "土尼勒"
	}).always(function (data) {
		clearTable();
		$("#illustrations_table_title").after(data);
	});
}

// 選擇提勒莎屬性事件
function clickRed() {
	$.post("index_server.php", {
		color: "red",
		name: "提勒莎"
	}).always(function (data) {
		clearTable();
		$("#illustrations_table_title").after(data);
	});
}

// 選擇弗雷伊西斯屬性事件
function clickBlue() {
	$.post("index_server.php", {
		color: "blue",
		name: "弗雷伊西斯"
	}).always(function (data) {
		clearTable();
		$("#illustrations_table_title").after(data);
	});
}

// 選擇奧狄烏斯屬性事件
function clickGreen() {
	$.post("index_server.php", {
		color: "green",
		name: "奧狄烏斯"
	}).always(function (data) {
		clearTable();
		$("#illustrations_table_title").after(data);
	});
}

function test(gg) {
	gg.unbind();
	gg.click(function () {
		gg.animate({
			fontSize: "200px"
		}, "slow", function () {
			test2(gg);
		});
		// test();
	});

}

function test2(gg) {
	gg.unbind();
	gg.click(function () {
		gg.animate({
			fontSize: "50px"
		}, "slow", function () {
			test(gg);
		});
	});

}

function createTable() {

	data = [["a", "b", "c"], ["1", "2", "3"], ["4", "5", "6"]];

	var td = "",
		tr = "";

	for (var i in data) {
		for (var j in data[i]) {
			td += "<td>" + data[i][j] + "</td>";
		}
		tr += "<tr>" + td + "/<tr>";
		td = "";
	}
	$("#illustrations_table_title").after(tr);
	tr = "";

}

function clearTable() {

	$("#illustrations_table").empty();

	var title = "<tr id=\"illustrations_table_title\">" +
		"<th>名稱</th>" +
		"<th>圖片</th>" +
		"<th>星等</th>" +
		"</tr> ";
	$("#illustrations_table").append(title);

}
