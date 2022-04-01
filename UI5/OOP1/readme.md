# Document Class

    sap.ui.define([
	    "sap/ui/base/ManagedObject"
    ], function(
	    ManagedObject
    ) {
	    "use strict";

        // 定义Document class, 继承了ManagedObject
	    return ManagedObject.extend("com.blog.classes.Document", {
		    sDocumentId: null,
		    constructor: function(sDocumentId) {
			    ManagedObject.prototype.constructor.apply(this, []);  // 等同于 super()
			    this.sDocumentId = sDocumentId;
			    return this;
		    },
		    getDataMap: function() {
			    return {
				    DOCUMENT_ID: this.sDocumentId
			    };
		    }
	    });
    });


# call Document Class
    sap.ui.define([
	    "sap/ui/core/mvc/Controller",
	    "com/blog/classes/Document"
    ], function(
	    Controller,
	    Document
    ) {
	    "use strict";

	    return Controller.extend("com.blog.classes.Master", {
		    onInit: function() {
			    const sDocumentId = "67000023";
			    const oDocument = new Document(sDocumentId);
			    const mDocumentData = oDocument.getDataMap();
		    }
	    });
    });


# 翻译成其他的语言

    import java.util.HashMap;
    public class Document {
        String documentId;
        Document(String documentId) {
            this.documentId = documentId;
        }
    
        public HashMap<String, String> getDataMap() {
            HashMap<String, String> data = new HashMap<String, String>();
            data.put("DOCUMENT_ID", this.documentId);
            return data;
        }
    }

    import java.util.HashMap;
    public class Main {
        public static void main(String[] args) {
            String documentId = "67000023";
            Document document = new Document(documentId);
            HashMap<String, String> documentData = document.getDataMap();
        }
    }



