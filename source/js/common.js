// JavaScript Document

// Global variables
var currentMonth = 0;
var currentMonthDebt = 0;
var currentMonthTrend = 0;

var previousMonth = 0;
var previousMonthDebt = 0;
var previousMonthTrend = 0;

var nextMonth = 0;
var nextMonthDebt = 0;
var nextMonthTrend = 0;

var currentYear = 0;
var currentYearDebt = 0;
var currentYearTrend = 0;

// const
var currentMonthConst = 0;

// For format number
var strNumber = '';

// Initialization for current month
var date = new Date();
currentMonth = date.getMonth();	
currentMonthConst = date.getMonth();
currentMonthDebt = currentMonth;
currentMonthTrend = currentMonth;

previousMonth = (currentMonth + 12 - 1)%12;
previousMonthDebt = (currentMonthDebt + 12 - 1)%12;
previousMonthTrend = (currentMonthTrend + 12 - 1)%12;

nextMonth = (currentMonth + 1)%12;
nextMonthDebt = (currentMonthDebt + 1)%12;
nextMonthTrend = (currentMonthTrend + 1)%12;

currentYear = date.getFullYear();
currentYearDebt = date.getFullYear();
currentYearTrend = date.getFullYear();

// For update transaction
var currentCategoryID = 0;
var currentTransactionID = 0;
var currentLocation = 0; // 0 - transaction 1- debts

var categoryColorArray = ['#99CDFB','#3366FB','#0000FA','#F8CC00','#F89900','#F76600', '#B20EF7', '#F77B0E', '#02C627', '#0FBC45'];

function onReadyTransaction( ){
	//console.log( 'Transaction completed' )
}

function onSuccessExecuteSql( tx, results ){
	//console.log( 'Execute SQL completed' )
}

function onErrorCommon(err){
	//console.log( err );
}

function SetConfigured(db){
	db.transaction(
		function(tx){
		tx.executeSql(
			"INSERT INTO Config(IsConfig) VALUES(?)",
			[1],
			onSuccessExecuteSql,
			onErrorCommon
		)
		},
		onErrorCommon,
		onReadyTransaction
	);
	
	// Insert to category table
	// Initialization category
	db.transaction(
		function(tx){
		tx.executeSql(
			"INSERT INTO Category(CategoryID, CategoryName, CategoryType, CategoryTypeSpecify, isInitialization) VALUES(?, ?, ?, ?, ?)",
			[1, 'Khởi tạo', 0, 1, 1],
			onSuccessExecuteSql,
			onErrorCommon
		)
		},
		onErrorCommon,
		onReadyTransaction
	);
	
	// Income	
	db.transaction(
		function(tx){
		tx.executeSql(
			"INSERT INTO Category(CategoryID, CategoryName, CategoryType, CategoryTypeSpecify, isInitialization) VALUES(?, ?, ?, ?, ?)",
			[2, 'Lương tháng', 0, 1, 0],
			onSuccessExecuteSql,
			onErrorCommon
		)
		},
		onErrorCommon,
		onReadyTransaction
	);
	
	db.transaction(
		function(tx){
		tx.executeSql(
			"INSERT INTO Category(CategoryID, CategoryName, CategoryType, CategoryTypeSpecify, isInitialization) VALUES(?, ?, ?, ?, ?)",
			[3, 'Thưởng', 0, 1, 0],
			onSuccessExecuteSql,
			onErrorCommon
		)
		},
		onErrorCommon,
		onReadyTransaction
	);
	
	// Spent
	db.transaction(
		function(tx){
		tx.executeSql(
			"INSERT INTO Category(CategoryID, CategoryName, CategoryType, CategoryTypeSpecify, isInitialization) VALUES(?, ?, ?, ?, ?)",
			[4, 'Tiền ăn', 1, 1, 0],
			onSuccessExecuteSql,
			onErrorCommon
		)
		},
		onErrorCommon,
		onReadyTransaction
	);
	
	db.transaction(
		function(tx){
		tx.executeSql(
			"INSERT INTO Category(CategoryID, CategoryName, CategoryType, CategoryTypeSpecify, isInitialization) VALUES(?, ?, ?, ?, ?)",
			[5, 'Đổ xăng', 1, 1, 0],
			onSuccessExecuteSql,
			onErrorCommon
		)
		},
		onErrorCommon,
		onReadyTransaction
	);
	
	
	db.transaction(
		function(tx){
		tx.executeSql(
			"INSERT INTO Category(CategoryID, CategoryName, CategoryType, CategoryTypeSpecify, isInitialization) VALUES(?, ?, ?, ?, ?)",
			[6, 'Tiền nhà', 1, 1, 0],
			onSuccessExecuteSql,
			onErrorCommon
		)
		},
		onErrorCommon,
		onReadyTransaction
	);
	
	db.transaction(
		function(tx){
		tx.executeSql(
			"INSERT INTO Category(CategoryID, CategoryName, CategoryType, CategoryTypeSpecify, isInitialization) VALUES(?, ?, ?, ?, ?)",
			[7, 'Du lịch', 1, 1, 0],
			onSuccessExecuteSql,
			onErrorCommon
		)
		},
		onErrorCommon,
		onReadyTransaction
	);
	
	// Debt and loan
	db.transaction(
		function(tx){
		tx.executeSql(
			"INSERT INTO Category(CategoryID, CategoryName, CategoryType, CategoryTypeSpecify, isInitialization) VALUES(?, ?, ?, ?, ?)",
			[8, 'Vay tiền', 0, 0, 0],
			onSuccessExecuteSql,
			onErrorCommon
		)
		},
		onErrorCommon,
		onReadyTransaction
	);
	
	db.transaction(
		function(tx){
		tx.executeSql(
			"INSERT INTO Category(CategoryID, CategoryName, CategoryType, CategoryTypeSpecify, isInitialization) VALUES(?, ?, ?, ?, ?)",
			[9, 'Cho vay', 1, 0, 0],
			onSuccessExecuteSql,
			onErrorCommon
		)
		},
		onErrorCommon,
		onReadyTransaction
	);
	
}
	
function createTableConfig(db){
	db.transaction(
		function(tx){
		tx.executeSql(
			"CREATE TABLE IF NOT EXISTS Config (IsConfig BOOL)",
			[],
			onSuccessExecuteSql,
			onErrorCommon
		)
		},
		onErrorCommon,
		onReadyTransaction
	);
}


function createTableAccountInfo(db){
	db.transaction(
		function(tx){
			tx.executeSql(
				"CREATE TABLE IF NOT EXISTS AccountInfo (AccountID INTEGER PRIMARY KEY AUTOINCREMENT, AccountDisplay TEXT, AccountBalance INTEGER, CurrencyUnit TEXT)",
				[],
				onSuccessExecuteSql,
				onErrorCommon
			)
		},
		onErrorCommon,
		onReadyTransaction
	);
}

function createTableCategory(db){
	db.transaction(
		function(tx){
			tx.executeSql(
				"CREATE TABLE IF NOT EXISTS Category (CategoryID INTEGER PRIMARY KEY, CategoryName TEXT, CategoryType INTEGER, CategoryTypeSpecify INTEGER, isInitialization INTEGER, isDefault INTEGER)",
				[],
				onSuccessExecuteSql,
				onErrorCommon
			)
		},
		onErrorCommon,
		onReadyTransaction
	);
}

function createTableTransaction(db){
	db.transaction(
		function(tx){	
			tx.executeSql(
				"CREATE TABLE IF NOT EXISTS Transactions (TransactionID INTEGER PRIMARY KEY AUTOINCREMENT, Amount INTEGER, Description TEXT, CategoryID INTEGER, TransactionDate DATE)",
				[],
				onSuccessExecuteSql,
				onErrorCommon
			)
		},
		onErrorCommon,
		onReadyTransaction
	);
}

function getAccountDisplayResult(tx, results){
	if(results.rows.length > 0){
		var row = results.rows.item(0);
		//return "Exists";
		$("#accountDisplay").text(row['AccountDisplay']);
	}else{
		//return "Tài khoản của tôi";
		$("#accountDisplay").text("Tài khoản của tôi");
	}
}

function getAccountDisplay(db){
	db.transaction(
					function(tx){				
						tx.executeSql(
						"SELECT AccountDisplay FROM AccountInfo",
						[],
						getAccountDisplayResult,
						onErrorCommon
					)
				},
				onErrorCommon,
				onReadyTransaction
			);
}

function getCategoryDisplay(tx, results){
	var len = results.rows.length, i;
	var i;
	
	// Empty before add
	$('#category').empty();
	
	// initialize category menu
	$('#category').selectmenu();
	
	// Default
	$("#category").append(new Option("Chọn thể loại", 0));
	$("#category").val(0);
	
	for (i = 0; i < len; i++) {
//		console.log(results.rows.item(i).CategoryID + " " + results.rows.item(i).CategoryName);
		$("#category").append(new Option(results.rows.item(i).CategoryName, results.rows.item(i).CategoryID));
	}
	
	// Refresh menu 
	$('#category').selectmenu('refresh');
}

function getCategory(db){
	
	db.transaction(
					function(tx){				
						tx.executeSql(
						"SELECT * FROM Category WHERE CategoryID > 1",
						[],
						getCategoryDisplay,
						onErrorCommon
					)
				},
				onErrorCommon,
				onReadyTransaction
			);
}

function getDb(){
	var db = window.openDatabase("myDatabase", "1.0", "My WebSQL database", 5*1024*1024);
		
	if(!db) {
		// Check DB was created
		//alert('Your DB was not created this time');
		return null;
	}
	
	return db;
		
}

function resetFields(){
	var myDate = new Date();
	var defaultDate = (myDate.getMonth()+1) + '/' + myDate.getDate() + '/' + myDate.getFullYear();
	
	document.getElementById('amount').value = "";
	document.getElementById('txtNote').value = "";
	//document.getElementById('dateTrans').value = "";
	$('#dateTrans').val(defaultDate);
}	

function onCreateTransactionSuccess(){
	resetFields();
	
	// Rebuild list transaction
	getListTransaction();
	
	// Update date list transaction
	getListDebt();
	
	// Update trend
	//updateMonthDisplayForTrend();
	
	window.location.href = '#addTransactionSuccess';
}

function onCreateTransaction(){
	
	db = getDb();
	
	if( db){
		var categoryID = 0;
		var amount = 0;
		var note = "";
		
		categoryID = parseInt(document.getElementById('category').value) ;
		amountTmp = document.getElementById('amount').value.toString().replace(/\$|\.|\ VND/g,'');
		//amount = parseInt(document.getElementById('amount').value);
		amount = parseInt(amountTmp);
		note = document.getElementById('txtNote').value;
		dateTrans = document.getElementById('dateTrans').value;
		
		//alert('Kiểm tra lại thể loại/ nhập số tiền ' + categoryID + " " + amount + " " + note + " " + dateTrans);
		
		if( categoryID == 0 || isNaN(amount) ||
			note == "" || dateTrans == "" )
		{
			alert('Kiểm tra lại thông tin thể loại/ nhập số tiền/ ghi chú/ ngày giao dịch!');
			return;
		}
		
		db.transaction(
					function(tx){				
						tx.executeSql(
						"INSERT INTO Transactions(Amount, Description, CategoryID, TransactionDate) VALUES(?, ?, ?, ?)",
						[amount, note, categoryID, dateTrans],
						onCreateTransactionSuccess,
						onErrorCommon
					)
				},
				onErrorCommon,
				onReadyTransaction
			);
	}
}

function updateMonthDisplayForSpentIncome(){
	previousMonth = (currentMonth + 12 - 1)%12;
	nextMonth = (currentMonth + 1)%12;
	
	// Update listransaction
	getListTransaction();
}

function updateMonthDisplayForDebt(){
	previousMonthDebt = (currentMonthDebt + 12 - 1)%12;
	nextMonthDebt = (currentMonthDebt + 1)%12;
	
	// Update listransaction
	getListDebt();
}

function updateMonthDisplayForTrend(){
	previousMonthTrend = (currentMonthTrend + 12 - 1)%12;
	nextMonthTrend = (currentMonthTrend + 1)%12;
	
	// Update listransaction
	getStatictis();
	
	drawPieChart();
}

// For transaction
function buildCategoryListDisplay(tx, results){
	var len = results.rows.length, i;
	var i;
	
	// initialize category menu
	$('#categoryUpdate').empty();
	$('#categoryUpdate').selectmenu();
	
	// Default
	$("#categoryUpdate").append(new Option("Chọn thể loại", 0));
	//$("#categoryUpdate").val(0);
	
	for (i = 0; i < len; i++) {
		$("#categoryUpdate").append(new Option(results.rows.item(i).CategoryName, results.rows.item(i).CategoryID));
	}
	
	$("#categoryUpdate").val(currentCategoryID);
	
	// Refresh menu 
	$('#categoryUpdate').selectmenu('refresh');
}

function buildCategoryList(){
	db.transaction(
			function(tx){				
				tx.executeSql(
				"SELECT * FROM Category WHERE CategoryID > 1",
				[],
				buildCategoryListDisplay,
				onErrorCommon
			)
		},
		onErrorCommon,
		onReadyTransaction
	);
}

function showTransactionDetailResult(tx, results){
	if( results.rows.length > 0){
		// Get data from result query 
		var row = results.rows.item(0);
		
		var da = new Date(row['TransactionDate']);
		
		var fulldate = "Ngày giao dịch: " + da.getDate()+ '/' + (da.getMonth()+1) + '/' + da.getFullYear();
		var description  = "Mô tả chi tiết: " + row['Description'];
		var amount = "Số tiền: " + row['Amount'];
		
		// Set Information in dialog page
		$('#amountUpdate').val(formatCurrency(row['Amount']));
		$('#txtNoteUpdate').val(row['Description']);
		$('#dateTransUpdate').val(row['TransactionDate']);
		//$("#category").val(row['TransactionID']);
		buildCategoryList();
		currentCategoryID = row['CategoryID'];
		currentTransactionID = row['TransactionID'];
						
		window.location.href = '#showInformationTransactionPage';
	}else{
		// ID not valid 
		// Do notthing
	}
}

function showTransactionDetail(id){
	currentLocation = 0;
	
	db = getDb();
	
	db.transaction(
					function(tx){				
						tx.executeSql(
						"SELECT Category.CategoryName, Category.CategoryID, Transactions.TransactionID, Transactions.Description, Transactions.Amount, Transactions.TransactionDate\
							FROM Category INNER JOIN Transactions on Category.CategoryID=Transactions.CategoryID WHERE TransactionID=?",
						[id],
						showTransactionDetailResult,
						onErrorCommon
					)
				},
				onErrorCommon,
				onReadyTransaction
			);
	
}

function getListTransactionDisplayResult(tx, results){
	//$("#listTransactionDisplay").text("Tháng " + (currentMonth + 1) + "-" + currentYear);
	
	// Initialization 
	$("#ulListTransaction").empty();
	$('#listTransactionmainContent').empty();
	
	// build current time
	$('#listTransactionmainContent').append("<div><h3 id='currentTimeTransaction' style='text-align:center'> Tháng " + (currentMonth + 1) + " - " + currentYear + "</h3></div>");
	
	
	isExist = false;
	var len = results.rows.length;
	if(len > 0){
		var month = 0;
		var cnt = 0;
		var isNewDay = true;
		var subDescription = "";
		var isFirst = true;
		
		for( cnt = 0; cnt < len; cnt++){
			var row = results.rows.item(cnt);
			var da = new Date(row["TransactionDate"]);
			
			if(row['Description'].length >= 20){
				subDescription = row['Description'].substring(0, 20) + "..." + '-' + da.getDate()+ '/' + (da.getMonth()+1) + '/' + da.getFullYear();
			}else{
				subDescription = row['Description'] + '-' + da.getDate()+ '/' + (da.getMonth()+1) + '/' + da.getFullYear();;
			}

			// Get date and month
			if( da.getMonth() == currentMonth && date.getFullYear() == currentYear){
				if(isFirst == true){
					$('#listTransactionmainContent').append('<ul data-role="listview" data-inset="true" id="ulListTransaction"></ul>');
					$('#ulListTransaction').listview();
					isFirst = false;
				}
				
			/*	$("#ulListTransaction").append("<li id=" + row['TransactionID'] + "><a href='#'>" + subDescription
				+ "</a><span class='ui-li-count ui-btn-up-c ui-btn-corner-all'>" + formatCurrency(row['Amount']) + " VND</span></li>");		*/
				$("#ulListTransaction").append("<li id=" + row['TransactionID'] + "><a href='#'><h3>" + subDescription
				+ "</h3><p>" + formatCurrency(row['Amount']) + "</p></a></li>");		
				
				// There is an item or more in list
				isExist = true;		
			}
		}
	}else{
		//return "Tài khoản của tôi";
		// DO nothing
	}
	
	if (!isExist){
		$('#ulListTransaction').empty();
		$("#listTransactionmainContent").append("<p>"+"Không có chi tiêu nào trong tháng này :("+"</p>");
		
	}else{
		
		// Bind event
		$("#ulListTransaction li").on("click", function (event) {
			//alert($(this).attr('id'));
			//window.location.href = '#showInformationTransactionPage';
			var id = $(this).attr('id');
			
			showTransactionDetail(id);
		});	
		
		$('#ulListTransaction').listview('refresh');
	}
}

function getListTransaction(){	
	db = getDb();
	
	db.transaction(
			function(tx){				
				tx.executeSql(
				"SELECT Category.CategoryName, Category.CategoryType, Category.CategoryTypeSpecify, Transactions.TransactionID, Transactions.Description, Transactions.Amount, Transactions.TransactionDate\
				FROM Category INNER JOIN Transactions on Category.CategoryID=Transactions.CategoryID WHERE Category.CategoryTypeSpecify = 1 ORDER BY Transactions.TransactionDate ASC",
				[],
				getListTransactionDisplayResult,
				onErrorCommon
			)
		},
		onErrorCommon,
		onReadyTransaction
	);	
}

// For debt

function showDebtDetailResult(tx, results){
	if( results.rows.length > 0){
		// Get data from result query 
		var row = results.rows.item(0);
		
		var da = new Date(row['TransactionDate']);
		
		var fulldate = "Ngày giao dịch: " + da.getDate()+ '/' + (da.getMonth()+1) + '/' + da.getFullYear();
		var description  = "Mô tả chi tiết: " + row['Description'];
		var amount = "Số tiền: " + row['Amount'];
		
		// Set Information in dialog page
		/*$('#dateDebt').text(fulldate);
		$('#descriptionDebt').text(description);
		$('#amoutDebt').text(amount);*/
		// Set Information in dialog page
		$('#amountUpdate').val(formatCurrency(row['Amount']));
		$('#txtNoteUpdate').val(row['Description']);
		$('#dateTransUpdate').val(row['TransactionDate']);
		//$("#category").val(row['TransactionID']);
		buildCategoryList();
		currentCategoryID = row['CategoryID'];
		currentTransactionID = row['TransactionID'];
		
		window.location.href = '#showInformationTransactionPage';
	}else{
		// ID not valid 
		// Do notthing
	}
}

function showDebtDetail(id){
	currentLocation = 1;
	
	db = getDb();
	
	db.transaction(
					function(tx){				
						tx.executeSql(
						"SELECT Category.CategoryName, Category.CategoryID, Transactions.TransactionID, Transactions.Description, Transactions.Amount, Transactions.TransactionDate\
							FROM Category INNER JOIN Transactions on Category.CategoryID=Transactions.CategoryID WHERE TransactionID=?",
						[id],
						showDebtDetailResult,
						onErrorCommon
					)
				},
				onErrorCommon,
				onReadyTransaction
			);
	
}

function getListDebtDisplayResult(tx, results){
	//$("#listDebtsDisplay").text("Tháng " + (currentMonthDebt + 1) + "-" + currentYearDebt);
	
	// Initialization 
	$("#ulListDebt").empty();
	$('#listDebtsmainContent').empty();
	//$('#ulListTransaction').listview();
	// build current time
	$('#listDebtsmainContent').append("<div><h3 id='currentTimeDebts' style='text-align:center'> Tháng " + (currentMonthDebt + 1) + " - " + currentYearDebt + "</h3></div>");
	
	isExist = false;
	var len = results.rows.length;
	
	if(len > 0){
		var month = 0;
		var cnt = 0;
		var isNewDay = true;
		var subDescription = "";
		var isFirst = true;
		
		for( cnt = 0; cnt < len; cnt++){
			var row = results.rows.item(cnt);
			var da = new Date(row["TransactionDate"]);
			
			if(row['Description'].length >= 20){
				subDescription = row['Description'].substring(0, 20) + "..." + '-' + da.getDate()+ '/' + (da.getMonth()+1) + '/' + da.getFullYear();
			}else{
				subDescription = row['Description'] + '-' + da.getDate()+ '/' + (da.getMonth()+1) + '/' + da.getFullYear();;
			}
			
			// Get date and month
			if( da.getMonth() == currentMonthDebt && date.getFullYear() == currentYearDebt){
				if(isFirst == true){
					$('#listDebtsmainContent').append('<ul data-role="listview" data-inset="true" id="ulListDebt"></ul>');
					$('#ulListDebt').listview();
					isFirst = false;
				}
				
				/*$("#ulListDebt").append("<li id=" + row['TransactionID'] + "><a href='#'>" + subDescription
				+ "</a><span class='ui-li-count ui-btn-up-c ui-btn-corner-all'>" + formatCurrency(row['Amount']) + " VND</span></li>");	*/
				$("#ulListDebt").append("<li id=" + row['TransactionID'] + "><a href='#'><h3>" + subDescription
				+ "</h3><p>" + formatCurrency(row['Amount']) + "</p></a></li>");
				
				// There is an item or more in list
				isExist = true;		
			}
		}
	}else{
		//return "Tài khoản của tôi";
		// DO nothing
	}
	
	if (!isExist){
		$('#ulListDebt').empty();
		$("#listDebtsmainContent").append("<p>"+"Không có vay/nợ nào trong tháng này :("+"</p>");
		
	}else{
		// Bind event
		$("#ulListDebt li").on("click", function (event) {
			//alert($(this).attr('id'));
			// get data from db
			//1. Get id
			var id = $(this).attr('id');
			
			showDebtDetail(id);
		//	window.location.href = '#showInformationDebtPage';
		});	

		$('#ulListDebt').listview('refresh');
	}
	
}

function getListDebt(){	
	db = getDb();
	
	db.transaction(
			function(tx){				
				tx.executeSql(
				"SELECT Category.CategoryName, Category.CategoryType, Category.CategoryTypeSpecify, Transactions.TransactionID, Transactions.Description, Transactions.Amount, Transactions.TransactionDate\
				FROM Category INNER JOIN Transactions on Category.CategoryID=Transactions.CategoryID WHERE Category.CategoryTypeSpecify = 0 ORDER BY Transactions.TransactionDate ASC",
				[],
				getListDebtDisplayResult,
				onErrorCommon
			)
		},
		onErrorCommon,
		onReadyTransaction
	);	
}

function onPreviousMonth(){
	// Update current year
	if( currentMonth == 0){
		currentYear = currentYear - 1;
	}
	// Set current month
	currentMonth = previousMonth;
	
	updateMonthDisplayForSpentIncome();
}

function onNextMonth(){
	// Update current year
	if( currentMonth == 11){
		currentYear = currentYear + 1;
	}
	// Set current month
	currentMonth = nextMonth;
	
	updateMonthDisplayForSpentIncome();
}

// For debt
function onPreviousMonthDebt(){
	// Update current year
	if( currentMonthDebt == 0){
		currentYearDebt = currentYearDebt - 1;
	}
	// Set current month
	currentMonthDebt = previousMonthDebt;
	
	updateMonthDisplayForDebt();
}

function onNextMonthDebt(){
	// Update current year
	if( currentMonthDebt == 11){
		currentYearDebt = currentYearDebt + 1;
	}
	// Set current month
	currentMonthDebt = nextMonthDebt;
	
	updateMonthDisplayForDebt();
}

// For Trend
function onPreviousMonthTrend(){
	// Update current year
	if( currentMonthTrend == 0){
		currentYearTrend = currentYearTrend - 1;
	}
	// Set current month
	currentMonthTrend = previousMonthTrend;
	
	updateMonthDisplayForTrend();
}

function onNextMonthTrend(){
	// Update current year
	if( currentMonthTrend == 11){
		currentYearTrend = currentYearTrend + 1;
	}
	// Set current month
	currentMonthTrend = nextMonthTrend;
	
	updateMonthDisplayForTrend();
}

function drawPieChartDisplayResult(tx, results){
	var len = results.rows.length;
	var totalIncome  = 0;
	var totalOutcome = 0;
	var balance = 0;
	var widthScreen = screen.width;
	var heightScreen =screen.height;
	
	var myChart = new JSChart('graph', 'pie');
	var arrayCnt = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
	var isExits = false;
	
	var arrayAmount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10];
	var arrayCategoryName = ['', '', '', '', '', '', '', '', ''];
	
	if( len > 0){
		var arrayColor = new Array();
		var myData = new Array();
		var counter = 0;
		
		for( cnt = 0; cnt < len; cnt++){
			var row = results.rows.item(cnt);
			var da = new Date(row["TransactionDate"]);
			
			// Get date and month
			if( da.getMonth() == currentMonthTrend && date.getFullYear() == currentYearTrend){		
				isExits = true;
				arrayAmount[row['CategoryID']] += row['Amount'];
				arrayCategoryName[row['CategoryID']] = row['CategoryName']; ;
				//arrayAmount[row['CategoryID']] = arrayAmount[row['CategoryID']] + row['Amount'];
				//arrayCategoryName[row['CategoryID']] = row['CategoryName'];
				//myChart.colorize(['#99CDFB','#3366FB','#0000FA','#F8CC00','#F89900','#F76600']);
				//arrayColor[counter] = categoryColorArray[counter];
				//myChart.setLegend(categoryColorArray[counter], row['CategoryName']);
				//myData[counter] = [arrayCnt[counter], 111];
				//counter += 1;
			}
		}
		
		counter = 0;
		// Set color and title
		for( cnt = 0; cnt <= 9; cnt++){
			if(arrayAmount[cnt] > 0){
				arrayColor[counter] = categoryColorArray[counter];
				myChart.setLegend(categoryColorArray[counter], arrayCategoryName[cnt]);
				myData[counter] = [arrayCnt[counter], arrayAmount[cnt]];
				counter += 1;
			}
		}
		
		if(isExits){
			// draw pie chart
			myChart.setDataArray(myData);
			myChart.colorize(arrayColor);
			myChart.setSize(380, 300);
			myChart.setTitle('Biểu đồ thống kê chi tiêu');
			myChart.setTitleFontFamily('Times New Roman');
			myChart.setTitleFontSize(14);
			myChart.setTitleColor('#0F0F0F');
			myChart.setPieRadius(100);
			myChart.setPieValuesColor('#FFFFFF');
			myChart.setPieValuesFontSize(9);
			myChart.setPiePosition(100, 180);
			myChart.setShowXValues(false);
			/*myChart.setLegend('#99CDFB', 'Papers where authors found');
			myChart.setLegend('#3366FB', 'Papers which cite from other articles');
			myChart.setLegend('#0000FA', 'Papers which cite from news');
			myChart.setLegend('#F8CC00', 'Papers which lack crucial');
			myChart.setLegend('#F89900', 'Papers with different conclusion');
			myChart.setLegend('#F76600', 'Papers with useful information');*/
			myChart.setLegendShow(true);
			myChart.setLegendFontFamily('Times New Roman');
			myChart.setLegendFontSize(15);
			myChart.setLegendPosition(215, 120);
			myChart.setPieAngle(0);
			myChart.set3D(true);
			myChart.draw();
		}
	}else{
		
	}
}

function drawPieChart(){
	db = getDb();
	
	db.transaction(
			function(tx){				
				tx.executeSql(
				"SELECT Category.CategoryID, Category.CategoryName, Transactions.TransactionID, Transactions.Description, Transactions.TransactionDate, Transactions.Amount \
				FROM Category INNER JOIN Transactions on Category.CategoryID=Transactions.CategoryID WHERE Category.CategoryType = 1 ORDER BY Transactions.TransactionDate ASC",
				[],
				drawPieChartDisplayResult,
				onErrorCommon
			)
		},
		onErrorCommon,
		onReadyTransaction
	);
}

function getStatictisDisplayResult(tx, results){
	// Update current month
	$('#currentTimeTrend').text('Tháng ' + (currentMonthTrend + 1) + " - " + currentYearTrend);
	
	var totalIncome = 0;
	var totalOutcome = 0;
	var balance = 0;
	var len = results.rows.length;
	
	if( len > 0){
		for( cnt = 0; cnt < len; cnt++){
			var row = results.rows.item(cnt);
			var da = new Date(row["TransactionDate"]);
			
			// Get date and month
			if( da.getMonth() == currentMonthTrend && date.getFullYear() == currentYearTrend){
				// Check income or outcome
				if( row['CategoryType'] == 0){
					totalIncome += row['Amount'];	
				}else{
					totalOutcome += row['Amount'];
				}
			}
		}
		
		balance = totalIncome - totalOutcome;
	}else{
		
	}
	
	// update statistic
	$('#totalIncome').text(formatCurrency(totalIncome));
	$('#totalOutcome').text(formatCurrency(totalOutcome));
	$('#balance').text(formatCurrency(balance));
}

function getStatictis(){
	db = getDb();
	
	db.transaction(
			function(tx){				
				tx.executeSql(
				"SELECT Category.CategoryName, Category.CategoryType, Category.CategoryTypeSpecify, Transactions.TransactionID, Transactions.Description, Transactions.Amount, Transactions.TransactionDate\
				FROM Category INNER JOIN Transactions on Category.CategoryID=Transactions.CategoryID ORDER BY Transactions.TransactionDate ASC",
				[],
				getStatictisDisplayResult,
				onErrorCommon
			)
		},
		onErrorCommon,
		onReadyTransaction
	);	
}

function formatCurrency(num) {
	num = num.toString().replace(/\$|\.|\ VND/g,'');
	if(isNaN(num)){
		num = "0";
	}else{
		if( num < 1000){
			num = num;
		}else{
			for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
			num = num.substring(0,num.length-(4*i+3)) + '.' + num.substring(num.length-(4*i+3));
		}
	}
	
	return num + " VND";
}

function AutoFormatDigit(obj) {
	var num = formatCurrency($(obj).val());
	$(obj).val(num);
}

function onDeleteTransactionSuccess(){	
	updateMonthDisplayForTrend();
	
	if(currentLocation == 0){
		getListTransaction();
		window.location.href = '#listTransaction';
	}else{
		getListDebt();
		window.location.href = '#listDebts';
	}
}

function onDeleteTransaction(){
	db = getDb();
	
	db.transaction(
		function(tx){
		tx.executeSql(
			"DELETE FROM Transactions WHERE TransactionID = ?",
			[currentTransactionID],
			onDeleteTransactionSuccess,
			onErrorCommon
		)
		},
		onErrorCommon,
		onReadyTransaction
	);
}
// For update and delete transaction
function onRemoveTransaction(){
	window.location.href = "#confirmation";
}

function onUpdateTransactionSuccess(){
	updateMonthDisplayForTrend();
	
	if(currentLocation == 0){
		getListTransaction();
	}else{
		getListDebt();
	}
	
	window.location.href = "#updateTransactionSuccess";
}

function onUpdateTransaction(){
	db = getDb();
	
	if( db){
		var categoryID = 0;
		var amount = 0;
		var note = "";
		
		categoryID = parseInt(document.getElementById('categoryUpdate').value) ;
		amountTmp = document.getElementById('amountUpdate').value.toString().replace(/\$|\.|\ VND/g,'');
		//amount = parseInt(document.getElementById('amount').value);
		amount = parseInt(amountTmp);
		note = document.getElementById('txtNoteUpdate').value;
		dateTrans = document.getElementById('dateTransUpdate').value;
		
		//alert('Kiểm tra lại thể loại/ nhập số tiền ' + categoryID + " " + amount + " " + note + " " + dateTrans);
		
		if( categoryID == 0 || isNaN(amount) ||
			note == "" || dateTrans == "" )
		{
			alert('Kiểm tra lại thông tin thể loại/ nhập số tiền/ ghi chú/ ngày giao dịch!');
			return;
		}
		
		db.transaction(
					function(tx){				
						tx.executeSql(
						"UPDATE Transactions SET Amount=?, Description = ?, CategoryID = ?, TransactionDate = ? WHERE TransactionID = ?",
						[amount, note, categoryID, dateTrans, currentTransactionID],
						onUpdateTransactionSuccess,
						onErrorCommon
					)
				},
				onErrorCommon,
				onReadyTransaction
			);
	}
}

function onRedirection(){
	if(currentLocation == 0){
		window.location.href = '#listTransaction';
	}else{
		window.location.href = '#listDebts';
	}
}

function removeAutoFormatDigit(obj){
	var num = $(obj).val().toString().replace(/\$|\.|\ VND/g,'');
	
	$(obj).val(num);
}
function test(){
	alert(1);
}