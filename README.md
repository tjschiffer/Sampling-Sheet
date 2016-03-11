# Sampling-Sheet

This application is used to visualize sample results and user inputs from an in lab analyzer on tablets within a process development lab. It replaces a previous paper based system with low user compliance in which result written on paper were transferred to a LIMS database.

The table is generated using an ASP .NET page that executes a query against a LIMS database and adds user inputs where neccessary.

"Send Data" sends values by POST to a server-side csv generator which is presented the a LIMS. For demo purposes I have replaced that with a simple page showing the values sotred in LocalStorage. 

**Notable Features:**


**Spreadsheet like input of data.**
	Users may press the "Enter" key to move to the next cell when entering data.

**HTML5 LocalStorage:**
	Values are stored in LocalStorage in case of user error. Values are cleared when they are confirmed in the database (values in the database are placeholders within the inputs and "Send Data" triggers a page refresh).

**Fixed Headers:**
	A Fixed Header jQuery script is used which copies all header cells and replaces them with fixed position clones of the same dimension. This application targets Chrome 37+ and as such this fixed header implementation fails for other browsers due to variable results from javascript's clientWidth and/or paddingLeft/Right properties.

**Client Side QR Barcodes on Focus:**
	When the user focuses on a cell in the "Sample Barcode" column, a QR barcode is display which can be scanned into a spreadsheet. Uses qrcode.js available [here](https://davidshimjs.github.io/qrcodejs/).

**Browser Check:**
	Due to several users having very old versions of Chrome, a browser check script is used to catch users who would otherwise be unable to use CSS3 checkboxes and ure them to contact the IT department to update to a complaint Chrome version.
