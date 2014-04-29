// JavaScript Document

// Global variables
var currentMonth = 0;
var currentYear = 0;
var previousMonth = 0;
var nextMonth = 0;

// Set current month
var date = new Date();
currentMonth = date.getMonth();	
previousMonth = (currentMonth + 12 - 1)%12;
nextMonth = (currentMonth + 1)%12;
//currentMonth = 11 ;	
currentYear = date.getYear();

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
	document.getElementById('category').value = "" ;
	document.getElementById('amount').value = "";
	document.getElementById('txtNote').value = "";
	document.getElementById('dateTrans').value = "";
}	

function onCreateTransactionSuccess(){
	resetFields();
	
	// Rebuild list transaction
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

function updateMonthDisplay(){
	previousMonth = (currentMonth + 12 - 1)%12;
	nextMonth = (currentMonth + 1)%12;
	
	var cur= currentMonth + 1;
	var pre= previousMonth + 1;
	var next= nextMonth + 1;
	
	$("#currentMonth").text("Tháng " + cur);
	$("#previousMonth").text("Tháng " + pre);
	$("#nextMonth").text("Tháng " + next);
}

function getListTransactionDisplayResult(tx, results){
	$("#listTransactionmainView").empty();
	updateMonthDisplay();
	
	if(results.rows.length > 0){
		//return "Exists";
		// Get month now
		
		var len = results.rows.length;
		var month = 0;
		var cnt = 0;
		var isNewDay = true;
		var currentDate = 0;
		var subDescription = "";
		
		for( cnt = 0; cnt < len; cnt++){
			var row = results.rows.item(cnt);
			var da = new Date(row["TransactionDate"]);
			
			if(row['Description'].length >= 20){
				subDescription = row['Description'].substring(0, 20) + "...";
			}else{
				subDescription = row['Description'];
			}
			
			// Get current day
			currentDate = da.getDate();
			
			$listID = 'date'+currentDate;
			
			
			// Get date and month
			if( da.getMonth() == currentMonth){
				//alert('1');
			$("#ulListTransaction").append("<li><a href='#'>" + subDescription + "</a></li>");		
		//	alert('2');	
		/*		if(isNewDay){
					$("#listTransactionmainView").append("<div data-role='collapsible' data-collapsed-icon='arrow-r' data-expanded-icon='arrow-d' data-inset='false'>");
					$("#listTransactionmainView").append('<div data-role="collapsible">');
					$("#listTransactionmainView").append('<h2>' + row['CategoryName'] + '</h2>');
					$("#listTransactionmainView").append('<ul data-role="listview">');
				}
				
				// print list view 
				$("#listTransactionmainView").append("<li><a href='#'>" + subDescription + "</a></li>");
				
				var rw = results.rows.item((cnt+1));
				var newDate = new Date(rw["TransactionDate"]);
				var nextDate = newDate.getDate();
				
				if(currentDate != nextDate){
					$("#listTransactionmainView").append("</ul>");
					//$("#listTransactionmainView").append("</div>");
					$("#listTransactionmainView").append("</div>");
					isNewDay = true;
				}else{
					isNewDay = false;
				}*/
			}
			
			// update
//			$('#ulListTransaction').listview('refresh');
		}
	}else{
		//return "Tài khoản của tôi";
		$("#listTransactionmainView").append("<p>"+"Không có chi tiêu nào trong tháng này :("+"</p>");
	}
	
	
}

function getListTransaction(){	
	db = getDb();
	
	db.transaction(
					function(tx){				
						tx.executeSql(
						"SELECT Category.CategoryName, Category.CategoryType, Category.CategoryTypeSpecify, Transactions.Description, Transactions.Amount, Transactions.TransactionDate\
						FROM Category INNER JOIN Transactions on Category.CategoryID=Transactions.CategoryID GROUP BY  Category.CategoryName, Category.CategoryType, Category.CategoryTypeSpecify,\
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

function onPreviousMonth(){
	// Set current month
	currentMonth = previousMonth;
	updateMonthDisplay();
}

function onCurrentMonth(){
	
}

function onNextMonth(){
	// Set current month
	currentMonth = nextMonth;
	updateMonthDisplay();
}