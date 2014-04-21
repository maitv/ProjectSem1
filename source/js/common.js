// JavaScript Document

isAccountExist = false;

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
	// Income	
	db.transaction(
		function(tx){
		tx.executeSql(
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isDefault) VALUES(?, ?, ?, ?)",
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
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isDefault) VALUES(?, ?, ?, ?)",
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
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isDefault) VALUES(?, ?, ?, ?)",
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
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isDefault) VALUES(?, ?, ?, ?)",
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
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isDefault) VALUES(?, ?, ?, ?)",
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
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isDefault) VALUES(?, ?, ?, ?)",
			['Du lịch', 1, 1, 0],
			onSuccessExecuteSql,
			onErrorCommon
		)
		},
		onErrorCommon,
		onReadyTransaction
	);
	
	// Other spent
	db.transaction(
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
	);
	
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
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isDefault) VALUES(?, ?, ?, ?)",
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
			"INSERT INTO Category(CategoryName, CategoryType, CategoryTypeSpecify, isDefault) VALUES(?, ?, ?, ?)",
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
				"CREATE TABLE IF NOT EXISTS Category (CategoryID INTEGER PRIMARY KEY AUTOINCREMENT, CategoryName TEXT, CategoryType INTEGER, CategoryTypeSpecify INTEGER, isDefault INTEGER)",
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
	
	// Default
	$("#category").append(new Option("Chọn thể loại", 0));
	$("#category").val(0);
	
	for (i = 0; i < len; i++) {
		$("#category").append(new Option(results.rows.item(i).CategoryName, results.rows.item(i).CategoryID));
	}
}

function getCategory(db){
	db.transaction(
					function(tx){				
						tx.executeSql(
						"SELECT * FROM Category",
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
	window.location.href = '#mainpage';
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
		
		if( categoryID == 0 || amount == 0 || dateTrans == null)
		{
			alert('Kiểm tra lại thể loại/ nhập số tiền');
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


