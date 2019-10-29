/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function setupPermissionConfig(){
	if(!cordova.plugins.permissions)alert("CORDOVA PERMISSION PLUGIN not found");
	return cordova.plugins.permissions;//init 
}
function requestPermission(arr){//arr->[permission.CAMERA,...]
	arr.forEach(function(permissionString){
		permissions.hasPermission(permissionString, function(status) {
            if (status.hasPermission) {
              console.log("Yes :D "); //permission granted
            } else {
              //if permission NOT found, request for it
              permissions.requestPermission(permissionString, successPermission, errorPermission);
            }
		});
	});
	
    function errorPermission() {
        alert('Permission is not turned on');
    }

    function successPermission(status) {
        if (!status.hasPermission) error();
    }
		 
}
 
