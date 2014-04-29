// JavaScript Document

// Global variables
var currentMonth = 0;
var currentMonthDebt = 0;

var previousMonth = 0;
var previousMonthDebt = 0;

var nextMonth = 0;
var nextMonthDebt = 0;

var currentYear = 0;
var currentYearDebt = 0;

// Initialization for current month
var date = new Date();
currentMonth = date.getMonth();	
currentMonthDebt = currentMonth;

previousMonth = (currentMonth + 12 - 1)%12;
previousMonthDebt = (currentMonthDebt + 12 - 1)%12;

nextMonth = (currentMonth + 1)%12;
nextMonthDebt = (currentMonthDebt + 1)%12;

currentYear = date.getFullYear();
currentYearDebt = date.getFullYear();

function onReadyTransaction( ){
	console.log( 'Transaction completed' )
}

function onSuccessExecuteSql( tx, results ){
	console.log( 'Execute SQL completed' )
}

function onErrorCommon(err){
	console.log( err );
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
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isInitialization) VALUES(?, ?, ?, ?)",
			['Khởi tạo', 0, 1, 1],
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
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isInitialization) VALUES(?, ?, ?, ?)",
			['Lương tháng', 0, 1, 0],
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
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isInitialization) VALUES(?, ?, ?, ?)",
			['Thưởng', 0, 1, 0],
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
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isInitialization) VALUES(?, ?, ?, ?)",
			['Tiền ăn', 1, 1, 0],
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
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isInitialization) VALUES(?, ?, ?, ?)",
			['Đổ xăng', 1, 1, 0],
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
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isInitialization) VALUES(?, ?, ?, ?)",
			['Tiền nhà', 1, 1, 0],
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
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isInitialization) VALUES(?, ?, ?, ?)",
			['Du lịch', 1, 1, 0],
			onSuccessExecuteSql,
			onErrorCommon
		)
		},
		onErrorCommon,
		onReadyTransaction
	);
	
	// Other spent
	/*db.transaction(
		function(tx){
		tx.executeSql(
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isDefault) VALUES(?, ?, ?, ?)",
			['Khác', 0, 1, 0],
			onSuccessExecuteSql,
			onErrorCommon
		)
		},
		onErrorCommon,
		onReadyTransaction
	);*/
	
	// Other spent
	/*db.transaction(
		function(tx){
		tx.executeSql(
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isDefault) VALUES(?, ?, ?, ?)",
			['Khác', 1, 1, 0],
			onSuccessExecuteSql,
			onErrorCommon
		)
		},
		onErrorCommon,
		onReadyTransaction
	);
	*/
	
	// Debt and loan
	db.transaction(
		function(tx){
		tx.executeSql(
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isInitialization) VALUES(?, ?, ?, ?)",
			['Vay tiền', 0, 0, 0],
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
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isInitialization) VALUES(?, ?, ?, ?)",
			['Cho vay', 1, 0, 0],
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
				"CREATE TABLE IF NOT EXISTS Category (CategoryID INTEGER PRIMARY KEY AUTOINCREMENT, CategoryName TEXT, CategoryType INTEGER, CategoryTypeSpecify INTEGER, isInitialization INTEGER, isDefault INTEGER)",
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
	
	// initialize category menu
	$('#category').selectmenu();
	
	// Default
	$("#category").append(new Option("Chọn thể loại", 0));
	$("#category").val(0);
	
	for (i = 0; i < len; i++) {
		$("#category").append(new Option(results.rows.item(i).CategoryName, results.rows.item(i).CategoryID));
	}
	
	// Refresh menu 
	$('#category').selectmenu('refresh');
/*	var newOption = "<option value='dynamic'>Dynamic Entry</option>";
    $("#category").append(newOption).selectmenu('refresh');
	alert('after refresh menu');*/
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
	//document.getElementById('category').value = "" ;
	document.getElementById('amount').value = "";
	document.getElementById('txtNote').value = "";
	document.getElementById('dateTrans').value = "";
}	

function onCreateTransactionSuccess(){
	resetFields();
	
	// Rebuild list transaction
	getListTransaction();
	
	// Update date list transaction
	getListTransaction();
	
	window.location.href = '#addTransactionSuccess';
}

function onCreateTransaction(){
	
	db = getDb();
	
	if( db){
		var categoryID = 0;
		var amount = 0;
		var note = "";
		
		categoryID = parseInt(document.getElementById('category').value) ;
		amount = parseInt(document.getElementById('amount').value);
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

// For transaction


function showTransactionDetailResult(tx, results){
	if( results.rows.length > 0){
		// Get data from result query 
		var row = results.rows.item(0);
		
		var da = new Date(row['TransactionDate']);
		
		var fulldate = "Ngày giao dịch: " + da.getDate()+ '/' + (da.getMonth()+1) + '/' + da.getFullYear();
		var description  = "Mô tả chi tiết: " + row['Description'];
		var amount = "Số tiền: " + row['Amount'];
		
		// Set Information in dialog page
		$('#dateTransaction').text(fulldate);
		$('#descriptionTransaction').text(description);
		$('#amoutTransaction').text(amount);

						
		window.location.href = '#showInformationTransactionPage';
	}else{
		// ID not valid 
		// Do notthing
	}
}

function showTransactionDetail(id){
	db = getDb();
	
	db.transaction(
					function(tx){				
						tx.executeSql(
						"SELECT Transactions.Description, Transactions.Amount, Transactions.TransactionDate\
						FROM Transactions WHERE TransactionID=?",
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
	$("#listTransactionDisplay").text("Tháng " + (currentMonth + 1) + "-" + currentYear);
	
	// Initialization 
	$("#ulListTransaction").empty();
	$('#listTransactionmainContent').empty();
	
	isExist = false;
	
	if(results.rows.length > 0){

		var len = results.rows.length;
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
				
				$("#ulListTransaction").append("<li id=" + row['TransactionID'] + "><a href='#'>" + subDescription
				+ "</a><span class='ui-li-count ui-btn-up-c ui-btn-corner-all'>" + row['Amount'] + "</span></li>");		
				
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
						FROM Category INNER JOIN Transactions on Category.CategoryID=Transactions.CategoryID WHERE Category.CategoryTypeSpecify = 1 GROUP BY  Category.CategoryName, Category.CategoryType, Category.CategoryTypeSpecify,\
  					    Transactions.Description, Transactions.Amount, Transactions.TransactionDate ORDER BY Transactions.TransactionDate ASC",
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
		$('#dateDebt').text(fulldate);
		$('#descriptionDebt').text(description);
		$('#amoutDebt').text(amount);
		
		window.location.href = '#showInformationDebtPage';
	}else{
		// ID not valid 
		// Do notthing
	}
}

function showDebtDetail(id){
	db = getDb();
	
	db.transaction(
					function(tx){				
						tx.executeSql(
						"SELECT Transactions.Description, Transactions.Amount, Transactions.TransactionDate\
						FROM Transactions WHERE TransactionID=?",
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
	$("#listDebtsDisplay").text("Tháng " + (currentMonthDebt + 1) + "-" + currentYearDebt);
	
	// Initialization 
	$("#ulListDebt").empty();
	$('#listDebtsmainContent').empty();
	//$('#ulListTransaction').listview();
	
	isExist = false;
	
	if(results.rows.length > 0){
		var len = results.rows.length;
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
				
				$("#ulListDebt").append("<li id=" + row['TransactionID'] + "><a href='#'>" + subDescription
				+ "</a><span class='ui-li-count ui-btn-up-c ui-btn-corner-all'>" + row['Amount'] + "</span></li>");	
				
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
						FROM Category INNER JOIN Transactions on Category.CategoryID=Transactions.CategoryID WHERE Category.CategoryTypeSpecify = 0 GROUP BY  Category.CategoryName, Category.CategoryType, Category.CategoryTypeSpecify,\
  					    Transactions.Description, Transactions.Amount, Transactions.TransactionDate ORDER BY Transactions.TransactionDate ASC",
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