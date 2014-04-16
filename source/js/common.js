// JavaScript Document

function onReadyTransaction( ){
	console.log( 'Transaction completed' )
}

function onSuccessExecuteSql( tx, results ){
	console.log( 'Execute SQL completed' )
}

function onErrorCommon(err){
	console.log( err );
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