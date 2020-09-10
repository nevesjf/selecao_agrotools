    var localStorageName = 'mySurv';
    var IsEdit = false;
    var currentEditArrayPosition = 0;
    viewItems();

    function getInitialValue() {
        var today = new Date();
        var initialValue = {
            initial: "f",
            name: "first",
            dob: (today.getDate()) + "/" + (today.getMonth()+1) + "/" + (today.getFullYear()), //"",
            jobtype: "",
            annualincome: 0,
            city: "",
            mobile: 0,
            children: {
                "child1": 0
            },
            twowheelers: {
                "twowheeler1": ''
            },
            fourwheelers: {
                "fourwheeler1": ''
            }
            //isinsured: ''
            //whynoinsurance: '',
            //whenplanforinsurance: ''
        };
        return initialValue;
    }


   

    //Four start

    function addFourWheelerHeader() {
        $('#tblFourwheeler').append('<tr><th>Four Wheeler</th><th>Next Insurance date</th></tr>');
    }

    function addFourWheeers() {
        var fourWheelerCount = 0;
        $("#tblFourwheeler tr").each(function () {
            fourWheelerCount++;
        });
        appendFourWheelerRows(fourWheelerCount);
    }

    function appendFourWheelerRows(fourWheelerCount) {
        $('#tblFourwheeler').append('<tr id="tblFourwheeler' + fourWheelerCount + '"><td><input id = "fourwheelername' + fourWheelerCount + '" type ="text" /></td>  <td><input id ="fourwheelerinsurancedate' + fourWheelerCount + '"  type ="date" /></td>  <td><input type = "button" value = "X" onClick="removeTheFourWheeler(' + fourWheelerCount + ');" /></td></tr>');
    }

    function removeTheFourWheeler(fourWheelerIndex) {
        var totalFourWheelers = getFourWheelers();
        $("#tblFourwheeler tr").remove();
        addFourWheelerHeader();

        var fourWheelerCount = 1;
        var tempCount = 1;
        for (var childrenLoop = 0; childrenLoop < totalFourWheelers.length; childrenLoop++) {
            var fourwheelername = totalFourWheelers[childrenLoop].fourwheelername;
            var fourwheelerinsurancedate = totalFourWheelers[childrenLoop].fourwheelerinsurancedate;
            if (tempCount != fourWheelerIndex) {
                appendFourWheelerRows(fourWheelerCount);
                $('#fourwheelername' + fourWheelerCount).val(fourwheelername);
                $('#fourwheelerinsurancedate' + fourWheelerCount).val(fourwheelerinsurancedate);
                fourWheelerCount++;
            }
            tempCount++;
        }
    }

    function getFourWheelers() {
        var fourwheelers = [];
        var i = 0;
        var t = document.getElementById('tblFourwheeler');
        $("#tblFourwheeler tr").each(function () {
            if (i != 0) {
                var fourwheelername = $(this).find("#fourwheelername" + i).val();
                var fourwheelerinsurancedate = $(this).find("#fourwheelerinsurancedate" + i).val();
                fourwheelers.push({ fourwheelername: fourwheelername, fourwheelerinsurancedate: fourwheelerinsurancedate });
            }
            i++;
        });
        return fourwheelers;
    }

    //Four over









    function cancelNewItem() {
        //getObj('divGrid').style.display = "block";
        getObj('divAddNewItem').style.display = "none";
        viewItems();
    }
    function getFormattedDate(dateObj) {
        var day = dateObj.getDate();
        var month = dateObj.getMonth();
        var year = dateObj.getFullYear();

        return year + "-" + month + "-" + day;
    }
    function addDays(theDate, days) {
        return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
    }
    function getGUID(returnType) {
        if (returnType == 'string') {
            return uuidv4();
        } else if (returnType == 'age') {
            return Math.floor((Math.random() * 100) + 1);
        } else if (returnType == 'childAge') {
            return Math.floor((Math.random() * 20) + 1);
        } else if (returnType == 'mobileNumber') {
            return Math.floor((Math.random() * 10000000000) + 1);
        } else if (returnType == 'numberOfChildren') {
            return Math.floor((Math.random() * 5) + 1);
        } else if (returnType == 'numberOfTwoWheelers') {
            return Math.floor((Math.random() * 5) + 1);
        }
    }
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    function addChildren() {
        var childrenCount = 0;
        $("#tblChildren tr").each(function () {
            childrenCount++;
        });
        $('#tblChildren').append('<tr id="children' + childrenCount + '"><td><input id = "childName' + childrenCount + '" type ="text" /></td>  <td><input id ="childAge' + childrenCount + '" style="width:20px;" type ="text" /></td>  <td><input type = "button" value = "X" onClick="removeTheChild(' + childrenCount + ');" /></td></tr>');
    }

    function add2Wheeers() {
        var twowheelerCount = 0;
        $("#tbl2wheeler tr").each(function () {
            twowheelerCount++;
        });
        $('#tbl2wheeler').append('<tr id="twoWheeler' + twowheelerCount + '"><td><input id = "twowheelername' + twowheelerCount + '" type ="text" /></td>  <td><input id ="twowheelerinsurancedate' + twowheelerCount + '"  type ="date" /></td>  <td><input type = "button" value = "X" onClick="removeThe2Wheeler(' + twowheelerCount + ');" /></td></tr>');
    }

    function removeThe2Wheeler(twoWheelerIndex) {
        var totalTwoWheelers = getTwoWheelers();
        $("#tbl2wheeler tr").remove();
        add2WheelerHeader();

        var twowheelerCount = 1;
        var tempCount = 1;
        for (var childrenLoop = 0; childrenLoop < totalTwoWheelers.length; childrenLoop++) {
            var cName = totalTwoWheelers[childrenLoop].twowheelername;
            var cAge = totalTwoWheelers[childrenLoop].twowheelerinsurancedate;
            if (tempCount != twoWheelerIndex) {
                $('#tbl2wheeler').append('<tr id="twoWheeler' + twowheelerCount + '"><td><input id = "twowheelername' + twowheelerCount + '" type ="text" /></td>  <td><input id ="twowheelerinsurancedate' + twowheelerCount + '"  type ="date" /></td>  <td><input type = "button" value = "X" onClick="removeThe2Wheeler(' + twowheelerCount + ');" /></td></tr>');
                $('#twowheelername' + twowheelerCount).val(cName);
                $('#twowheelerinsurancedate' + twowheelerCount).val(cAge);
                twowheelerCount++;
            }
            tempCount++;
        }
    }


    function getTwoWheelers() {
        var twowheelers = [];
        var i = 0;
        var t = document.getElementById('tbl2wheeler');
        $("#tbl2wheeler tr").each(function () {
            if (i != 0) {
                var twowheelername = $(this).find("#twowheelername" + i).val();
                var twowheelerinsurancedate = $(this).find("#twowheelerinsurancedate" + i).val();
                twowheelers.push({ twowheelername: twowheelername, twowheelerinsurancedate: twowheelerinsurancedate });
            }
            i++;
        });
        return twowheelers;
    }


    function showLocation(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        document.getElementById("lat").value = latitude;
        document.getElementById("lon").value = longitude;

    }

    function errorHandler(err) {
        if(err.code == 1) {
           alert("Error: Access is denied!");
        } else if( err.code == 2) {
           alert("Error: Position is unavailable!");
        }
    }
        
    function getLocation() {

        if(navigator.geolocation) {
           
           // timeout at 60000 milliseconds (60 seconds)
           var options = {timeout:60000};
           latlong = navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
        } else {
           alert("Sorry, browser does not support geolocation!");
        }
    }



    function removeTheChild(childIndex) {
        var totalChildren = getChildren();
        $("#tblChildren tr").remove();
        addChildTableHeader();

        var childrenCount = 1;
        var tempCount = 1;
        for (var childrenLoop = 0; childrenLoop < totalChildren.length; childrenLoop++) {
            //alert(restoredSurv.queue[i].children[childrenLoop].childName);
            var cName = totalChildren[childrenLoop].childName;
            var cAge = totalChildren[childrenLoop].childAge;
            if (tempCount != childIndex) {
                $('#tblChildren').append('<tr id="children' + childrenCount + '"><td><input id = "childName' + childrenCount + '" type ="text" /></td>  <td><input id ="childAge' + childrenCount + '" style="width:20px;" type ="text" /></td>  <td><input type = "button" value = "X" onClick="removeTheChild(' + childrenCount + ');" /></td></tr>');

                //$('#tblChildren').append('<tr id="children' + childrenCount + '"><td><input id = "childName' + childrenCount + '" type ="text"  /></td><td><input id ="childAge' + childrenCount + '" style="width:20px;" type ="text" /></td></tr>');
                $('#childName' + childrenCount).val(cName);
                $('#childAge' + childrenCount).val(cAge);
                childrenCount++;
            }
            tempCount++;
        }

    }
    function exportItems() {
        var restoredSurv = JSON.parse(localStorage.getItem(localStorageName));

        if (restoredSurv != null) {
           var txtFile = "/tmp/test.txt";
           var file = new File(txtFile, "write");
           var str = JSON.stringify(restoredSurv);

           log("opening file...");
           file.open();
           log("writing file..");
           file.writeline(str);
           file.close();
        }
    }
    function clearItems() {
        var surItems =
            {
                queue:
                    [
                      getInitialValue()
                    ]
            };

        localStorage.setItem(localStorageName, JSON.stringify(surItems));
        viewItems();
    }

    function getJobType() {
        var jobtype = document.getElementsByName("jobtype");

        var selectedJobType = '';

        for (var i = 0; i < jobtype.length; i++) {
            if (jobtype[i].checked == true) {
                selectedJobType = jobtype[i].value;
            }
        }
        return selectedJobType;
    }

    function saveNewItem() {
        var today = new Date();
        var restoredSurv = JSON.parse(localStorage.getItem(localStorageName));
        if (currentEditArrayPosition == 0) {
            restoredSurv.queue.push({
                uniqueID: getGUID('string') + getGUID('string') + getGUID('string'),
                initial: getObj('initial').value,
                name: getObj('name').value,
                dob: (today.getDate()) + "/" + (today.getMonth()+1) + "/" + (today.getFullYear()), //getObj('dob').value,
                jobtype: getJobType(),

                annualincome: getObj('annualincome').value,

                twowheelers: getTwoWheelers(),

                fourwheelers: getFourWheelers(),

                isinsured: getIsInsured(),
                //whynoinsurance: getObj('whynoinsurance').value,
                //whenplanforinsurance: getObj('whenplanforinsurance').value,

                city: getObj('city').value,
                mobile: getObj('mobile').value,
                children: getChildren()
            });
        } else {
            if (restoredSurv != null) {
                if (restoredSurv.queue.length > 0) {
                    for (var i = 1; i < restoredSurv.queue.length; i++) {
                        if (i == currentEditArrayPosition) {
                            restoredSurv.queue[i].initial = getObj('initial').value;
                            restoredSurv.queue[i].name = getObj('name').value;

                            restoredSurv.queue[i].dob = (today.getDate()) + "/" + (today.getMonth()+1) + "/" + (today.getFullYear()); //getObj('dob').value;
                            restoredSurv.queue[i].jobtype = getJobType();

                            restoredSurv.queue[i].twowheelers = getTwoWheelers();

                            restoredSurv.queue[i].fourwheelers = getFourWheelers();

                            restoredSurv.queue[i].isinsured = getIsInsured();
                            //restoredSurv.queue[i].whynoinsurance = getObj('whynoinsurance').value;
                            //restoredSurv.queue[i].whenplanforinsurance = getObj('whenplanforinsurance').value;



                            restoredSurv.queue[i].city = getObj('city').value;
                            restoredSurv.queue[i].mobile = getObj('mobile').value;
                            restoredSurv.queue[i].children = getChildren();
                            console.log(JSON.stringify(restoredSurv.queue[i].children));
                        }
                    }
                }
            }
        }
        localStorage.setItem(localStorageName, JSON.stringify(restoredSurv));
        viewItems();
    }

    function getIsInsured() {
        var isIns = document.getElementsByName("isinsured");

        var selectedType = '';

        for (var i = 0; i < isIns.length; i++) {
            if (isIns[i].checked == true) {
                selectedType = isIns[i].value;
            }
        }
        return selectedType;
    }

    function getChildren() {
        var children = [];
        var i = 0;
        var t = document.getElementById('tblChildren');
        $("#tblChildren tr").each(function () {
            //var val1 = $(t.rows[i].cells[0]).text();
            //alert(val1);
            //alert($(this));
            if (i != 0) {
                var childName = $(this).find("#childName" + i).val();
                var childAge = $(this).find("#childAge" + i).val();
                children.push({ childName: childName, childAge: childAge });
                //alert(childName);
            }
            i++;
        });
        //alert("Children Count: " + i);
        return children;
    }

    function createNewQuestion(){

    }

    function viewItems() {

        getObj('divGrid').style.display = "block";

        getObj('divAddNewItem').style.display = "none";

        var restoredSurv = JSON.parse(localStorage.getItem(localStorageName));
        if (restoredSurv != null) {
            if (restoredSurv.queue.length > 0) {
                var outputs = "<h4>Resultados</h4>";

                if (restoredSurv.queue.length == 1) {
                    outputs = "<h4>Não há resultados!</h4>";
                }

                if (restoredSurv.queue.length > 1) {
                    outputs += " <table class='table table-striped table-bordered table-hover'>";
                    outputs += "<tr>";



                    outputs += "<th>Initial</th>";
                    outputs += "<th>Name</th>";


                    outputs += "<th>City</th>";
                    outputs += "<th>Mobile</th>";
                    outputs += "<th>Latitude</th>";
                    outputs += "<th>Longitude</th>";

                    outputs += "<th>Edit</th>";
                    outputs += "<th>Delete</th>";

                    outputs += "</tr>";
                }
                for (var i = 1; i < restoredSurv.queue.length; i++) {
                    outputs += "<tr>";

                    outputs += '<td style="width:50px;">' + restoredSurv.queue[i].initial + '</td>';
                    outputs += '<td style="width:50px;">' + restoredSurv.queue[i].name + '</td>';

                    outputs += '<td style="width:50px;">' + restoredSurv.queue[i].city + '</td>';
                    outputs += '<td style="width:50px;">' + restoredSurv.queue[i].mobile + '</td>';
                    outputs += '<td style="width:50px;">' + restoredSurv.queue[i].lat + '</td>';
                    outputs += '<td style="width:50px;">' + restoredSurv.queue[i].lon + '</td>';



                    outputs += '<td><button onClick="editItem(' + i + ');" class="btn btn-info">Edit</button></td>';
                    outputs += '<td><button onClick="deleteItem(' + i + ');" class="btn btn-danger">Delete</button></td>';
                    outputs += "</tr>";
                }
                if (restoredSurv.queue.length > 1) {
                    outputs += "</table>";
                }
               // document.getElementById("divGrid").innerHTML = outputs;
            }
        }
        console.log("Aqui"+JSON.stringify(restoredSurv));
    }

    function deleteItem(arrayPosition) {
        if (confirm('Are you sure to delete this record?')) {
            var restoredSurv = JSON.parse(localStorage.getItem(localStorageName));
            var surItems =
                {
                    queue:
                        [
                           getInitialValue()
                        ]
                };

            if (restoredSurv != null) {
                if (restoredSurv.queue.length > 0) {
                    for (var i = 1; i < restoredSurv.queue.length; i++) {
                        if (i != arrayPosition) {
                            surItems.queue.push({
                                initial: restoredSurv.queue[i].initial,
                                name: restoredSurv.queue[i].name,
                                city: restoredSurv.queue[i].city,
                                mobile: restoredSurv.queue[i].mobile,
                                children: restoredSurv.queue[i].children
                            });
                        }
                    }
                }
                localStorage.setItem(localStorageName, JSON.stringify(surItems));
            }

            viewItems();
        }
    }

    function editItem(arrayPosition) {
        IsEdit = true;
        currentEditArrayPosition = arrayPosition;
        //alert(arrayPosition);
        getObj('divAddNewItem').style.display = "block";
        //getObj('divGrid').style.display = "none";
        getObj('addEditHeader').innerHTML = "Edit item!";

        var restoredSurv = JSON.parse(localStorage.getItem(localStorageName));
        if (restoredSurv != null) {
            if (restoredSurv.queue.length > 0) {
                for (var i = 1; i < restoredSurv.queue.length; i++) {
                    if (i == arrayPosition) {
                        $('#initial').val(restoredSurv.queue[i].initial);
                        $('#name').val(restoredSurv.queue[i].name);

                        $('#dob').val(restoredSurv.queue[i].dob);


                        $('#annualincome').val(restoredSurv.queue[i].annualincome);

                        

                        $('#city').val(restoredSurv.queue[i].city);
                        $('#mobile').val(restoredSurv.queue[i].mobile);



                        //alert(restoredSurv.queue[i].children.length);
                        //$('#tblChildren').
                        //$('#tblChildren tbody').empty();
                        $("#tblChildren tr").remove();

                        addChildTableHeader();

                        var childrenCount = 1;
                        for (var childrenLoop = 0; childrenLoop < restoredSurv.queue[i].children.length; childrenLoop++) {
                            //alert(restoredSurv.queue[i].children[childrenLoop].childName);
                            var cName = restoredSurv.queue[i].children[childrenLoop].childName;
                            var cAge = restoredSurv.queue[i].children[childrenLoop].childAge;
                            $('#tblChildren').append('<tr id="children' + childrenCount + '"><td><input id = "childName' + childrenCount + '" type ="text" /></td>  <td><input id ="childAge' + childrenCount + '" style="width:20px;" type ="text" /></td>  <td><input type = "button" value = "X" onClick="removeTheChild(' + childrenCount + ');" /></td></tr>');

                            //$('#tblChildren').append('<tr id="children' + childrenCount + '"><td><input id = "childName' + childrenCount + '" type ="text"  /></td><td><input id ="childAge' + childrenCount + '" style="width:20px;" type ="text" /></td></tr>');
                            $('#childName' + childrenCount).val(cName);
                            $('#childAge' + childrenCount).val(cAge);
                            childrenCount++;
                        }
                        //alert("Children Count: " + restoredSurv.queue[i].children.length);

                        $("#tbl2wheeler tr").remove();

                        var twowheelerCount = 1;
                        add2WheelerHeader();
                        for (var childrenLoop = 0; childrenLoop < restoredSurv.queue[i].twowheelers.length; childrenLoop++) {
                            //alert(restoredSurv.queue[i].children[childrenLoop].childName);
                            var twowheelername = restoredSurv.queue[i].twowheelers[childrenLoop].twowheelername;
                            var twowheelerinsurancedate = restoredSurv.queue[i].twowheelers[childrenLoop].twowheelerinsurancedate;

                            $('#tbl2wheeler').append('<tr id="twoWheeler' + twowheelerCount + '"><td><input id = "twowheelername' + twowheelerCount + '" type ="text" /></td>  <td><input id ="twowheelerinsurancedate' + twowheelerCount + '"  type ="date" /></td>  <td><input type = "button" value = "X" onClick="removeThe2Wheeler(' + twowheelerCount + ');" /></td></tr>');

                            //$('#tblChildren').append('<tr id="children' + childrenCount + '"><td><input id = "childName' + childrenCount + '" type ="text"  /></td><td><input id ="childAge' + childrenCount + '" style="width:20px;" type ="text" /></td></tr>');
                            $('#twowheelername' + twowheelerCount).val(twowheelername);
                            $('#twowheelerinsurancedate' + twowheelerCount).val(twowheelerinsurancedate);
                            twowheelerCount++;
                        }

                        $("#tblFourwheeler tr").remove();
                        addFourWheelerHeader();
                        var fourWheelerCount = 1;

                        for (var childrenLoop = 0; childrenLoop < restoredSurv.queue[i].fourwheelers.length; childrenLoop++) {
                            var fourwheelername = restoredSurv.queue[i].fourwheelers[childrenLoop].fourwheelername;
                            var fourwheelerinsurancedate = restoredSurv.queue[i].fourwheelers[childrenLoop].fourwheelerinsurancedate;

                            appendFourWheelerRows(fourWheelerCount);

                            $('#fourwheelername' + fourWheelerCount).val(fourwheelername);
                            $('#fourwheelerinsurancedate' + fourWheelerCount).val(fourwheelerinsurancedate);
                            fourWheelerCount++;
                        }

                        




                    }
                }
            }
        }
    }
    function addChildTableHeader() {
        $('#tblChildren').append('<tr><th>Child Name</th><th>Child Age</th></tr>');
    }
    function add2WheelerHeader() {
        $('#tbl2wheeler').append('<tr><th>Two Wheeler</th><th>Next Insurance date</th></tr>');
    }
    function addNewItem() {
        

        IsEdit = false;
        currentEditArrayPosition = 0;
        getObj('addEditHeader').innerHTML = "Responder Questionário!";
        $("#tblChildren tr").remove();
        $("#tbl2wheeler tr").remove();
        $("#tblFourwheeler tr").remove();

        

        addChildTableHeader();
        add2WheelerHeader();
        addFourWheelerHeader();

        


        var existing = localStorage.getItem(localStorageName);

        var surItems =
            {
                queue:
                    [
                       getInitialValue()
                    ]
            };
        existing = existing ? JSON.parse(existing) : surItems;
        localStorage.setItem(localStorageName, JSON.stringify(existing));


        getObj('divAddNewItem').style.display = "block";
        //getObj('divGrid').style.display = "none";
        

    }

    function getObj(obj) {
        return document.getElementById(obj);
    }