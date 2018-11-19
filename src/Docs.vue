<template>
 <div class="container">
    <div id="nav" class="row">
      <div class="col-xs-5">
        <span class="title">sterling <span class="sterling-color">api</span></span>
      </div>
      <div id="topic-dropdown" class="col-xs-7">
          <select id="selectBox" onchange="onSelectOptionChange()">
              <option value="1">BVN Request</option>
              <option value="2">Name Value Request</option>
              <option value="3">SMS Request</option>
              <option value="4">OTP Request</option>
              <option value="5">Validate OTP Request</option>
              <option value="6">Get Billers ISW</option>
              <option value="7">GetBillerPmtItemsReq..</option>
              <option value="8">BillPaymtAdviceReq...</option>
              <option value="9">SBPM Wallet Request</option>
              <option value="10">SBPT24txnRequest</option>
          </select>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4">
        <section id="topics">
          <div class="outline-title">Contents</div>
          <div id="topic-1" ref="firstTopic" @click="showContent('1')">BVN Request</div>
          <div id="topic-2" @click="showContent('2')">Name Value Request</div>
          <div id="topic-3" @click="showContent('3')">SMS Request</div>
          <div id="topic-4" @click="showContent('4')">OTP Request</div>
          <div id="topic-5" @click="showContent('5')">Validate OTP Request</div>
          <div id="topic-6" @click="showContent('6')">Get Billers ISW</div>
          <div id="topic-7" @click="showContent('7')">GetBillerPmtItemsRequest</div>
          <div id="topic-8" @click="showContent('8')">BillPaymtAdviceRequestISW</div>
          <div id="topic-9" @click="showContent('9')">SBPM Wallet Request</div>
          <div id="topic-10" @click="showContent('10')">SBPT24txnRequest</div>
        </section>
      </div>
      <div class="col-sm-8">
        <section id="contents">
          <div id="content-1" ref="firstContent">
              <div id="content-header">BVN Request</div>
              <div>Accepts encrypted json string and returns encrypted json response to be decrypted by the calling client.</div>
              <table>
                <tr>
                  <th>Header Parameters</th>
                  <th></th> 
                </tr>
                <tr>
                  <td>Content-Type</td>
                  <td>application/json</td>
                </tr>
                <tr>
                  <td>Appid</td>
                  <td>To be sent via email</td>
                </tr>
              </table>
    
              <table>
                  <tr>
                    <th>Request</th>
                    <th></th> 
                  </tr>
                  <tr>
                    <td>Method</td>
                    <td>POST</td>
                  </tr>
                  <tr>
                    <td>URL</td>
                    <td>api/spay/BVNRequest</td>
                  </tr>
                </table>
    
                <table>
                    <col width="100">
                    <col width="300">
                    <tr>
                      <th>Request Parameters</th>
                      <th></th> 
                    </tr>
                    <tr>
                      <th>Field</th>
                      <th>Description</th>
                    </tr>
                    <tr>
                      <td>Referenceid</td>
                      <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                         Unique number that identifies
                          transactions/request in the following
                          format:
                          Appid + yymmddHHmmss + random
                          numbers
                          Appid is to be padded with leading 0
                          to make up a total length of 5. E.g if
                          your appid is 25 then it should be
                          00025
                      </td>
                    </tr>
                    <tr>
                        <td>RequestType</td>
                        <td>
                            <span class="bold">Type</span> : String<br><br>
                            <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                            Request type 100 represents BVN request
                        </td>
                    </tr>
                    <tr>
                        <td>Translocation</td>
                        <td>
                            <span class="bold">Type</span> : String<br><br>
                            <span class="bold">Presence Indicator</span> : Optional<br><br>
                            GPS location of channel of transaction in longitude & latitude
                        </td>
                    </tr>
                    <tr>
                        <td>BVN</td>
                        <td> <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          Financial Institution’s Customer’s Bank Verification Number
                        </td>
                    </tr>
                </table>
                
                <div>A sample request is shown below in JSON format (The content type header passed along in the request should specify that a JSON string is passed):</div>
                <div class="code-block">
                  {<br>
                  <span class="color-orange white-space">"Referenceid"</span> : &nbsp;<span class="color-purple">"00025170404241625980"</span>, <br>
                  <span class="color-orange white-space">"RequestType"</span> : &nbsp;<span class="color-purple">"100"</span>,<br>
                  <span class="color-orange white-space">"Translocation"</span> : &nbsp;<span class="color-purple">"6.587363,7.494737"</span>,<br>
                  <span class="color-orange white-space">"BVN"</span> : &nbsp;<span class="color-purple">"12345678909"</span><br>
                  }
                </div>
                <div>Response codes and sample response data are shown below:</div>
                <!-- <table>
                    <tr>
                      <th>Type</th>
                      <th>Response</th>
                      <th>Description</th> 
                    </tr>
                    <tr>
                      <td>Success</td>
                      <td>{<br>
                        &nbsp&nbsp&nbsp&nbsp"message":"success",<br>
                        &nbsp&nbsp&nbsp&nbsp "response":"success",<br>
                        &nbsp&nbsp&nbsp&nbsp "data":<br>
                        &nbsp&nbsp&nbsp&nbsp{<br>
                          &nbsp&nbsp&nbsp&nbsp&nbsp  "FirstName":"Abayomi",<br>
                          &nbsp&nbsp&nbsp&nbsp&nbsp  "LastName":"Kelechi",<br>
                          &nbsp&nbsp&nbsp&nbsp&nbsp  "MiddleName":"Dike",<br>
                          &nbsp&nbsp&nbsp&nbsp&nbsp  "PhoneNumber":"08061111111",<br>
                          &nbsp&nbsp&nbsp&nbsp&nbsp  "DateOfBirth":"12-Nov-1982",<br>
                          &nbsp&nbsp&nbsp&nbsp&nbsp  "RegistrationDate":"12-Nov-1982",<br>
                          &nbsp&nbsp&nbsp&nbsp&nbsp  "EnrollmentBankCode":"xxx",<br>
                          &nbsp&nbsp&nbsp&nbsp&nbsp  "EnrollmentBranch":"xxx",<br>
                          &nbsp&nbsp&nbsp&nbsp&nbsp  "status":success<br>
                          &nbsp&nbsp&nbsp&nbsp&nbsp  }<br>
                          }
                        </td>
                        <td>Message has been accepted <br> <br>Please check HTTP header for appropriate HTTP status code</td>
                    </tr>
                    <tr>
                      <td>Error</td>
                      <td>api/spay/BVNRequest</td>
                    </tr>
                  </table> -->
                  <div class="code-block">
                    <span class="response-type">Success Response</span>
                    <br><br>
                    {<br>
                    <span class="color-orange white-space">"message"</span> : <span class="color-purple">"success"</span>, <br>
                    <span class="color-orange white-space">"response"</span> : <span class="color-purple">"success"</span>,<br>
                    <span class="color-orange white-space">"data"</span> : <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;{<br>
                    <span class="color-orange more-white-space">"FirstName"</span> : <span class="color-purple">"Abayomi"</span>,<br>
                    <span class="color-orange more-white-space">"LastName"</span> : <span class="color-purple">"Kelechi"</span>,<br>
                    <span class="color-orange more-white-space">"MiddleName"</span> : <span class="color-purple">"Dike"</span>,<br>
                    <span class="color-orange more-white-space">"PhoneNumber"</span> : <span class="color-purple">"08061111111"</span>,<br>
                    <span class="color-orange more-white-space">"DateOfBirth"</span> : <span class="color-purple">"12-Nov-1982"</span>,<br>
                    <span class="color-orange more-white-space">"RegistrationDate"</span> : <span class="color-purple">"12-Nov-1982"</span>,<br>
                    <span class="color-orange more-white-space">"EnrollmentBankCode"</span> : <span class="color-purple">"xxx"</span>,<br>
                    <span class="color-orange more-white-space">"EnrollmentBranch"</span> : <span class="color-purple">"xxx"</span>,<br>
                    <span class="color-orange more-white-space">"status"</span> : <span class="color-purple">"success"</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    }
                    <br><br>
                    <span class="plain-text">Message has been accepted</span> <br>
                    <span class="plain-text">Please check HTTP header for appropriate HTTP status code  </span>       
                  </div>
                  <div class="code-block">
                      <span class="response-type">Error Response</span>
                      <br><br>
                      {<br>
                      <span class="color-orange white-space">"message"</span> : <span class="color-purple">"No BVN details found"</span>, <br>
                      <span class="color-orange white-space">"response"</span> : <span class="color-purple">"failed"</span>,<br>
                      <span class="color-orange white-space">"data"</span> : <br>
                      &nbsp;&nbsp;&nbsp;&nbsp;{<br>
                      <span class="color-orange more-white-space">"FirstName"</span> : <span class="color-purple">"No BVN"</span>,<br>
                      <span class="color-orange more-white-space">"LastName"</span> : <span class="color-purple">"No BVN"</span>,<br>
                      <span class="color-orange more-white-space">"MiddleName"</span> : <span class="color-purple">"No BVN"</span>,<br>
                      <span class="color-orange more-white-space">"PhoneNumber"</span> : <span class="color-purple">"No BVN"</span>,<br>
                      <span class="color-orange more-white-space">"DateOfBirth"</span> : <span class="color-purple">"No BVN"</span>,<br>
                      <span class="color-orange more-white-space">"RegistrationDate"</span> : <span class="color-purple">"No BVN"</span>,<br>
                      <span class="color-orange more-white-space">"EnrollmentBankCode"</span> : <span class="color-purple">"No BVN"</span>,<br>
                      <span class="color-orange more-white-space">"EnrollmentBranch"</span> : <span class="color-purple">"No BVN"</span>,<br>
                      <span class="color-orange more-white-space">"status"</span> : <span class="color-purple">"null"</span>,<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                      }
                      <br><br>
                      <span class="plain-text">Appropriate error message will be returned</span> <br>
                      <span class="plain-text">Please check HTTP header for appropriate HTTP status code  </span>       
                    </div>
          </div>
          <div id="content-2">
            <div id="content-header">Name Value Request</div>
            <div>Accepts encrypted json string and returns encrypted json response to be decrypted by the calling client.</div>
            <table>
              <tr>
                <th>Header Parameters</th>
                <th></th> 
              </tr>
              <tr>
                <td>Content-Type</td>
                <td>application/json</td>
              </tr>
              <tr>
                <td>Appid</td>
                <td>To be sent via email</td>
              </tr>
            </table>
  
            <table>
                <tr>
                  <th>Request</th>
                  <th></th> 
                </tr>
                <tr>
                  <td>Method</td>
                  <td>POST</td>
                </tr>
                <tr>
                  <td>URL</td>
                  <td>api/spay/NameValRequest</td>
                </tr>
              </table>
  
              <table>
                  <col width="100">
                  <col width="300">
                  <tr>
                    <th>Request Parameters</th>
                    <th></th> 
                  </tr>
                  <tr>
                    <th>Field</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>Referenceid</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        Unique number that identifies
                        transactions/request in the following
                        format:
                        Appid + yymmddHHmmss + random
                        numbers
                        Appid is to be padded with leading 0
                        to make up a total length of 5. E.g if
                        your appid is 25 then it should be
                        00025
                    </td>
                  </tr>
                  <tr>
                      <td>RequestType</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          Request type 101 represents Name request
                      </td>
                  </tr>
                  <tr>
                      <td>Translocation</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Optional<br><br>
                          GPS location of channel of transaction in longitude & latitude
                      </td>
                  </tr>
                  <tr>
                    <td>nuban</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        Beneficiary Account Number of financial institution’s customer
                    </td>
                  </tr>
                  <tr>
                      <td>destinationbankcode</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          Code for identifying destination Institution
                      </td>
                  </tr>
              </table>
              
              <div>A sample request is shown below in JSON format (The content type header passed along in the request should specify that a JSON string is passed):</div>
              <div class="code-block">
                {<br>
                <span class="color-orange white-space">"Referenceid"</span> : <span class="color-purple">"00025170404241625981"</span>, <br>
                <span class="color-orange white-space">"RequestType"</span> : <span class="color-purple">"101"</span>,<br>
                <span class="color-orange white-space">"Translocation"</span> : <span class="color-purple">"6.587363,7.494737"</span>,<br>
                <span class="color-orange white-space">"nuban"</span> : <span class="color-purple">"0052822811"</span><br>
                <span class="color-orange white-space">"destinationbankcode"</span> : <span class="color-purple">“000001"</span><br>
                }
              </div>
              <div>Response codes and sample response data are shown below:</div>
                <div class="code-block">
                  <span class="response-type">Success Response</span>
                  <br><br>
                  {<br>
                  <span class="color-orange white-space">"message"</span> : <span class="color-purple">"success"</span>, <br>
                  <span class="color-orange white-space">"response"</span> : <span class="color-purple">"success"</span>,<br>
                  <span class="color-orange white-space">"data"</span> : <br>  
                  &nbsp;&nbsp;&nbsp;&nbsp;{<br>
                  <span class="color-orange more-white-space">"AccountName"</span> : <span class="color-purple">"Bamiduro Tosin"</span>,<br>
                  <span class="color-orange more-white-space">"AccountNumber"</span> : <span class="color-purple">"0052822811"</span>,<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                  }
                  <br><br>
                  <span class="plain-text">Message has been accepted</span> <br>
                  <span class="plain-text">Please check HTTP header for appropriate HTTP status code  </span>       
                </div>
                <div class="code-block">
                    <span class="response-type">Error Response</span>
                    <br><br>
                    {<br>
                    <span class="color-orange white-space">"message"</span> : <span class="color-purple">"Invalid account"</span>, <br>
                    <span class="color-orange white-space">"response"</span> : <span class="color-purple">"07"</span>,<br>
                    <span class="color-orange white-space">"data"</span> : <span class="color-purple">"null"</span><br>
                    }
                    <br><br>
                    <span class="plain-text">Appropriate error message will be returned</span> <br>
                    <span class="plain-text">Please check HTTP header for appropriate HTTP status code  </span>       
                  </div>
           </div>
           <div id="content-3">
            <div id="content-header">SMS Request</div>
            <div>Accepts encrypted json string and returns encrypted json response to be decrypted by the calling client.</div>
            <table>
              <tr>
                <th>Header Parameters</th>
                <th></th> 
              </tr>
              <tr>
                <td>Content-Type</td>
                <td>application/json</td>
              </tr>
              <tr>
                <td>Appid</td>
                <td>To be sent via email</td>
              </tr>
            </table>
  
            <table>
                <tr>
                  <th>Request</th>
                  <th></th> 
                </tr>
                <tr>
                  <td>Method</td>
                  <td>POST</td>
                </tr>
                <tr>
                  <td>URL</td>
                  <td>api/spay/SMSRequest</td>
                </tr>
              </table>
  
              <table>
                  <col width="100">
                  <col width="300">
                  <tr>
                    <th>Request Parameters</th>
                    <th></th> 
                  </tr>
                  <tr>
                    <th>Field</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>Referenceid</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        Unique number that identifies
                        transactions/request in the following
                        format:
                        Appid + yymmddHHmmss + random
                        numbers
                        Appid is to be padded with leading 0
                        to make up a total length of 5. E.g if
                        your appid is 25 then it should be
                        00025
                    </td>
                  </tr>
                  <tr>
                      <td>RequestType</td>
                      <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        Request type 102 represents SMS request
                      </td>
                  </tr>
                  <tr>
                      <td>Translocation</td>
                      <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Optional<br><br>
                        GPS location of channel of transaction in longitude & latitude
                      </td>
                  </tr>
                  <tr>
                    <td>msg</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        The expected sms message to be sent out
                    </td>
                  </tr>
                  <tr>
                      <td>mobile</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          Mobile number to receive the message
                      </td>
                  </tr>
              </table>
              
              <div>A sample request is shown below in JSON format (The content type header passed along in the request should specify that a JSON string is passed):</div>
              <div class="code-block">
                {<br>
                <span class="color-orange white-space">"Referenceid"</span> : <span class="color-purple">"00025170404241625982"</span>, <br>
                <span class="color-orange white-space">"RequestType"</span> : <span class="color-purple">"102"</span>,<br>
                <span class="color-orange white-space">"Translocation"</span> : <span class="color-purple">"6.587363,7.494737"</span>,<br>
                <span class="color-orange white-space">"msg"</span> : <span class="color-purple">"Hi, welcome"</span><br>
                <span class="color-orange white-space">"mobile"</span> : <span class="color-purple">“08060981111"</span><br>
                }
              </div>
              <div>Response codes and sample response data are shown below:</div>
                <div class="code-block">
                  <span class="response-type">Success Response</span>
                  <br><br>
                  {<br>
                  <span class="color-orange white-space">"message"</span> : <span class="color-purple">"Message sent was successful"</span>, <br>
                  <span class="color-orange white-space">"response"</span> : <span class="color-purple">"00"</span>,<br>
                  <span class="color-orange white-space">"data"</span> : <br>
                  &nbsp;&nbsp;&nbsp;&nbsp;{<br>
                  <span class="color-orange white-space">"status"</span> : <span class="color-purple">"Delivered"</span>,<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                  }
                  <br><br>
                  <span class="plain-text">Message has been accepted</span> <br>
                  <span class="plain-text">Please check HTTP header for appropriate HTTP status code  </span>       
                </div>
                <div class="code-block">
                    <span class="response-type">Error Response</span>
                    <br><br>
                    {<br>
                    <span class="color-orange white-space">"message"</span> : <span class="color-purple">"Error occured"</span>, <br>
                    <span class="color-orange white-space">"response"</span> : <span class="color-purple">"x01"</span>,<br>
                    <span class="color-orange white-space">"data"</span> : <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;{<br>
                    <span class="color-orange more-white-space">"status"</span> : <span class="color-purple">"Error occured"</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    }
                    <br><br>
                    <span class="plain-text">Appropriate error message will be returned</span> <br>
                    <span class="plain-text">Please check HTTP header for appropriate HTTP status code </span>       
                  </div>
           </div>
           <div id="content-4">
            <div id="content-header">OTP Request</div>
            <div>Accepts encrypted json string and returns encrypted json response to be decrypted by the calling client.</div>
            <table>
              <tr>
                <th>Header Parameters</th>
                <th></th> 
              </tr>
              <tr>
                <td>Content-Type</td>
                <td>application/json</td>
              </tr>
              <tr>
                <td>Appid</td>
                <td>To be sent via email</td>
              </tr>
            </table>
  
            <table>
                <tr>
                  <th>Request</th>
                  <th></th> 
                </tr>
                <tr>
                  <td>Method</td>
                  <td>POST</td>
                </tr>
                <tr>
                  <td>URL</td>
                  <td>api/spay/OTPRequest</td>
                </tr>
              </table>
  
              <table>
                  <col width="100">
                  <col width="300">
                  <tr>
                    <th>Request Parameters</th>
                    <th></th> 
                  </tr>
                  <tr>
                    <th>Field</th>
                    <th>Type</th>
                  </tr>
                  <tr>
                    <td>Referenceid</td>
                    <td> <span class="bold">Type</span> : String<br><br>
                      <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                      Unique number that identifies
                        transactions/request in the following
                        format:
                        Appid + yymmddHHmmss + random
                        numbers
                        Appid is to be padded with leading 0
                        to make up a total length of 5. E.g if
                        your appid is 25 then it should be
                        00025
                    </td>
                  </tr>
                  <tr>
                      <td>RequestType</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>Request type 103 represents OTP request
                        </td>
                  </tr>
                  <tr>
                      <td>Translocation</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Optional<br><br>
                          GPS location of channel of transaction in longitude & latitude
                        </td>
                  </tr>
                  <tr>
                    <td>nuban</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>Customer's nuban account
                      </td>
                  </tr>
              </table>
              
              <div>A sample request is shown below in JSON format (The content type header passed along in the request should specify that a JSON string is passed):</div>
              <div class="code-block">
                {<br>
                <span class="color-orange white-space">"Referenceid"</span> : <span class="color-purple">"00025170404241625985"</span>, <br>
                <span class="color-orange white-space">"RequestType"</span> : <span class="color-purple">"103"</span>,<br>
                <span class="color-orange white-space">"Translocation"</span> : <span class="color-purple">"6.587363,7.494737"</span>,<br>
                <span class="color-orange white-space">"nuban"</span> : <span class="color-purple">"0008767654"</span><br>
                }
              </div>
              <div>Response codes and sample response data are shown below:</div>
                <div class="code-block">
                  <span class="response-type">Success Response</span>
                  <br><br>
                  {<br>
                  <span class="color-orange white-space">"message"</span> : <span class="color-purple">"OTP sent successfully"</span>, <br>
                  <span class="color-orange white-space">"response"</span> : <span class="color-purple">"00"</span>,<br>
                  <span class="color-orange white-space">"data"</span> : <br>
                  &nbsp;&nbsp;&nbsp;&nbsp;{<br>
                  <span class="color-orange more-white-space">"status"</span> : <span class="color-purple">"Delivered"</span>,<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                  }
                  <br><br>
                  <span class="plain-text">Message has been accepted</span> <br>
                  <span class="plain-text">Please check HTTP header for appropriate HTTP status code  </span>       
                </div>
                <div class="code-block">
                    <span class="response-type">Error Response</span>
                    <br><br>
                    {<br>
                    <span class="color-orange white-space">"message"</span> : <span class="color-purple">"Error occured"</span>, <br>
                    <span class="color-orange white-space">"response"</span> : <span class="color-purple">"x01"</span>,<br>
                    <span class="color-orange white-space">"data"</span> : <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;{<br>
                    <span class="color-orange white-space">"status"</span> : <span class="color-purple">"Error occured"</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    }
                    <br><br>
                    <span class="plain-text">Appropriate error message will be returned</span> <br>
                    <span class="plain-text">Please check HTTP header for appropriate HTTP status code </span>       
                  </div>
           </div>
           <div id="content-5">
            <div id="content-header">Validate OTP Request</div>
            <div>Accepts encrypted json string and returns encrypted json response to be decrypted by the calling client.</div>
            <table>
              <tr>
                <th>Header Parameters</th>
                <th></th> 
              </tr>
              <tr>
                <td>Content-Type</td>
                <td>application/json</td>
              </tr>
              <tr>
                <td>Appid</td>
                <td>To be sent via email</td>
              </tr>
            </table>
  
            <table>
                <tr>
                  <th>Request</th>
                  <th></th> 
                </tr>
                <tr>
                  <td>Method</td>
                  <td>POST</td>
                </tr>
                <tr>
                  <td>URL</td>
                  <td>api/spay/ValOTPRequest</td>
                </tr>
              </table>
  
              <table>
                  <col width="100">
                  <col width="300">
                  <tr>
                    <th>Request Parameters</th>
                    <th></th> 
                  </tr>
                  <tr>
                    <th>Field</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>Referenceid</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        Unique number that identifies
                        transactions/request in the following
                        format:
                        Appid + yymmddHHmmss + random
                        numbers
                        Appid is to be padded with leading 0
                        to make up a total length of 5. E.g if
                        your appid is 25 then it should be
                        00025
                    </td>
                  </tr>
                  <tr>
                      <td>RequestType</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          Request type 104 represents Validate OTP request
                      </td>
                  </tr>
                  <tr>
                      <td>Translocation</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Optional<br><br>
                          GPS location of channel of transaction in longitude & latitude
                      </td>
                  </tr>
                  <tr>
                    <td>nuban</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        Customer's nuban account
                    </td>
                  </tr>
                  <tr>
                    <td>otp</td>
                    <td> 
                      <span class="bold">Type</span> : String<br><br>
                      <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                      The otp to be validated
                    </td>
                  </tr>
              </table>
              
              <div>A sample request is shown below in JSON format (The content type header passed along in the request should specify that a JSON string is passed):</div>
              <div class="code-block">
                {<br>
                <span class="color-orange white-space">"Referenceid"</span> : <span class="color-purple">"00025170404241625982"</span>, <br>
                <span class="color-orange white-space">"RequestType"</span> : <span class="color-purple">"104"</span>,<br>
                <span class="color-orange white-space">"Translocation"</span> : <span class="color-purple">"6.587363,7.494737"</span>,<br>
                <span class="color-orange white-space">"nuban"</span> : <span class="color-purple">"0008767654"</span><br>
                <span class="color-orange white-space">"otp"</span> : <span class="color-purple">"009873"</span><br>
                }
              </div>
              <div>Response codes and sample response data are shown below:</div>
                <div class="code-block">
                  <span class="response-type">Success Response</span>
                  <br><br>
                  {<br>
                  <span class="color-orange white-space">"message"</span> : <span class="color-purple">"OTP validated successfully"</span>, <br>
                  <span class="color-orange white-space">"response"</span> : <span class="color-purple">"00"</span>,<br>
                  <span class="color-orange white-space">"data"</span> : <br>
                  &nbsp;&nbsp;&nbsp;&nbsp;{<br>
                  <span class="color-orange more-white-space">"status"</span> : <span class="color-purple">"OTP validated successfully"</span>,<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                  }
                  <br><br>
                  <span class="plain-text">Message has been accepted</span> <br>
                  <span class="plain-text">Please check HTTP header for appropriate HTTP status code  </span>       
                </div>
                <div class="code-block">
                    <span class="response-type">Error Response</span>
                    <br><br>
                    {<br>
                    <span class="color-orange white-space">"message"</span> : <span class="color-purple">"Validation has expired. Kindly generate a new token"</span>, <br>
                    <span class="color-orange white-space">"response"</span> : <span class="color-purple">"x01"</span>,<br>
                    <span class="color-orange white-space">"data"</span> : <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;{<br>
                    <span class="color-orange more-white-space">"status"</span> : <span class="color-purple">"Failed"</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    }
                    <br><br>
                    <span class="plain-text">Appropriate error message will be returned</span> <br>
                    <span class="plain-text">Please check HTTP header for appropriate HTTP status code </span>       
                  </div>
           </div>
           <div id="content-6">
            <div id="content-header">Get Billers ISW</div>
            <div>Accepts encrypted json string and returns encrypted json response to be decrypted by the calling client. The method returns list of billers</div>
            <table>
              <tr>
                <th>Header Parameters</th>
                <th></th> 
              </tr>
              <tr>
                <td>Content-Type</td>
                <td>application/json</td>
              </tr>
              <tr>
                <td>Appid</td>
                <td>To be sent via email</td>
              </tr>
            </table>
  
            <table>
                <tr>
                  <th>Request</th>
                  <th></th> 
                </tr>
                <tr>
                  <td>Method</td>
                  <td>POST</td>
                </tr>
                <tr>
                  <td>URL</td>
                  <td>api/spay/ValOTPRequest</td>
                </tr>
              </table>
  
              <table>
                  <col width="100">
                  <col width="300">
                  <tr>
                    <th>Request Parameters</th>
                    <th></th> 
                  </tr>
                  <tr>
                    <th>Field</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>Referenceid</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        Unique number that identifies
                        transactions/request in the following
                        format:
                        Appid + yymmddHHmmss + random
                        numbers
                        Appid is to be padded with leading 0
                        to make up a total length of 5. E.g if
                        your appid is 25 then it should be
                        00025
                    </td>
                  </tr>
                  <tr>
                      <td>RequestType</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          Request type 105 represents GetBillersISW request
                      </td>
                  </tr>
                  <tr>
                      <td>Translocation</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Optional<br><br>
                          GPS location of channel of transaction in longitude & latitude
                      </td>
                  </tr>
                  <tr>
                    <td>nuban</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        Customer's nuban account
                    </td>
                  </tr>
                  <tr>
                    <td>otp</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        The otp to be validated
                    </td>
                  </tr>
              </table>
              
              <div>A sample request is shown below in JSON format (The content type header passed along in the request should specify that a JSON string is passed):</div>
              <div class="code-block">
                {<br>
                <span class="color-orange white-space">"Referenceid"</span> : <span class="color-purple">"00025170404241625982"</span>, <br>
                <span class="color-orange white-space">"RequestType"</span> : <span class="color-purple">"105"</span>,<br>
                <span class="color-orange white-space">"Translocation"</span> : <span class="color-purple">"6.587363,7.494737"</span>,<br>
                }
              </div>
              <div>Response codes and sample response data are shown below:</div>
              <div class="code-block">
                <span class="response-type">Success Response</span>
                <br><br>
                {<br>
                <span class="color-orange">"message"</span> : <span class="color-purple">"Operation was successful"</span>, <br>
                <span class="color-orange">"response"</span> : <span class="color-purple">"00"</span>,<br>
                <span class="color-orange">"data"</span> : <br>
                {<br>
                <span class="color-orange">"billers"</span> : &nbsp;&nbsp;<span class="color-purple">"\u003c?xml version=\"1.0\"
                  encoding=\"utf-8\"
                  ?\u003e\u003cResponse\u003e\u003cResponse
                  Code\u003e90000\u003c/ResponseCode\u003e\
                  u003cBillerList
                  count=\"19\"\u003e\u003cCategory id=\"17\"
                  name=\"Products and Services\"
                  Description=\"Products and
                  \u003e\u003c/Category\u003e\u003c/BillerList\u0
                  03e\u003c/Response\u003e"</span>,<br>
                <span class="color-orange">"status"</span> : &nbsp;&nbsp;<span class="color-purple">"Successful"</span>,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                }
                <br><br>
                <!-- <span class="plain-text">Message has been accepted</span> <br>
                <span class="plain-text">Please check HTTP header for appropriate HTTP status code</span>  <br> -->
                <span class="plain-text">This method returns list of billers</span>       
              </div>
                <div class="code-block">
                    <span class="response-type">Error Response</span>
                    <br><br>
                    {<br>
                    <span class="color-orange white-space">"message"</span> : <span class="color-purple">"No Result"</span>, <br>
                    <span class="color-orange white-space">"response"</span> : <span class="color-purple">"25"</span>,<br>
                    <span class="color-orange white-space">"data"</span> : <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;{<br>
                    <span class="color-orange more-white-space">"billers"</span> : <span class="color-purple">"No Result"</span>,<br>
                    <span class="color-orange more-white-space">"status"</span> : <span class="color-purple">""</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    }
                    <br><br>
                    <span class="plain-text">Appropriate error message will be returned</span> <br>
                    <span class="plain-text">Please check HTTP header for appropriate HTTP status code </span>       
                  </div>
           </div>
           <div id="content-7">
            <div id="content-header">Get Biller Payment Items Request</div>
            <div>Accepts encrypted json string and returns encrypted json response to be decrypted by the calling client. The method returns list of billers</div>
            <table>
              <tr>
                <th>Header Parameters</th>
                <th></th> 
              </tr>
              <tr>
                <td>Content-Type</td>
                <td>application/json</td>
              </tr>
              <tr>
                <td>Appid</td>
                <td>To be sent via email</td>
              </tr>
            </table>
  
            <table>
                <tr>
                  <th>Request</th>
                  <th></th> 
                </tr>
                <tr>
                  <td>Method</td>
                  <td>POST</td>
                </tr>
                <tr>
                  <td>URL</td>
                  <td>api/spay/GetBillerPmtItemsRequest</td>
                </tr>
              </table>
  
              <table>
                  <col width="100">
                  <col width="300">
                  <tr>
                    <th>Request Parameters</th>
                    <th></th> 
                  </tr>
                  <tr>
                    <th>Field</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>Referenceid</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        Unique number that identifies
                        transactions/request in the following
                        format:
                        Appid + yymmddHHmmss + random
                        numbers
                        Appid is to be padded with leading 0
                        to make up a total length of 5. E.g if
                        your appid is 25 then it should be
                        00025
                    </td>
                  </tr>
                  <tr>
                      <td>RequestType</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          Request type 106 represents Get biller payment request request
                      </td>
                  </tr>
                  <tr>
                      <td>Translocation</td>
                      <td><span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Optional<br><br>
                        GPS location of channel of transaction in longitude & latitude
                      </td>
                  </tr>
                  <tr>
                    <td>billerid</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        Id gotten from when you call the GetBillers Method
                    </td>
                  </tr>
              </table>
              
              <div>A sample request is shown below in JSON format (The content type header passed along in the request should specify that a JSON string is passed):</div>
              <div class="code-block">
                {<br>
                <span class="color-orange white-space">"Referenceid"</span> : <span class="color-purple">"00025170404241625982"</span>, <br>
                <span class="color-orange white-space">"RequestType"</span> : <span class="color-purple">"106"</span>,<br>
                <span class="color-orange white-space">"Translocation"</span> : <span class="color-purple">"6.587363,7.494737"</span>,<br>
                <span class="color-orange white-space">"billerid"</span> : <span class="color-purple">"88333"</span>,<br>
                }
              </div>
              <div>Response codes and sample response data are shown below:</div>
                <div class="code-block">
                  <span class="response-type">Success Response</span>
                  <br><br>
                  {<br>
                  <span class="color-orange">"message"</span> : <span class="color-purple">"Operation was successful"</span>, <br>
                  <span class="color-orange">"response"</span> : <span class="color-purple">"00"</span>,<br>
                  <span class="color-orange">"data"</span> : <br>
                  {<br>
                  <span class="color-orange">"billers"</span> : &nbsp;&nbsp;<span class="color-purple">"\u003c?xml version=\"1.0\"
                    encoding=\"utf-8\"
                    ?\u003e\u003cResponse\u003e\u003cResponse
                    Code\u003e90000\u003c/ResponseCode\u003e\
                    u003cBillerList
                    count=\"19\"\u003e\u003cCategory id=\"17\"
                    name=\"Products and Services\"
                    Description=\"Products and
                    \u003e\u003c/Category\u003e\u003c/BillerList\u0
                    03e\u003c/Response\u003e"</span>,<br>
                  <span class="color-orange">"status"</span> : &nbsp;&nbsp;<span class="color-purple">"Successful"</span>,<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                  }
                  <br><br>
                  <!-- <span class="plain-text">Message has been accepted</span> <br>
                  <span class="plain-text">Please check HTTP header for appropriate HTTP status code</span>  <br> -->
                  <span class="plain-text">This method returns list of billers</span>       
                </div>
                <div class="code-block">
                    <span class="response-type">Error Response</span>
                    <br><br>
                    {<br>
                    <span class="color-orange white-space">"message"</span> : <span class="color-purple">"No Result"</span>, <br>
                    <span class="color-orange white-space">"response"</span> : <span class="color-purple">"25"</span>,<br>
                    <span class="color-orange white-space">"data"</span> : <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;{<br>
                    <span class="color-orange more-white-space">"billers"</span> : <span class="color-purple">"No Result"</span>,<br>
                    <span class="color-orange more-white-space">"status"</span> : <span class="color-purple">""</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    }
                    <br><br>
                    <span class="plain-text">Appropriate error message will be returned</span> <br>
                    <span class="plain-text">Please check HTTP header for appropriate HTTP status code </span>       
                  </div>
           </div>
           <div id="content-8">
            <div id="content-header">Bill Payment Advice Request ISW</div>
            <div>Accepts encrypted json string and returns encrypted json response to be decrypted by the calling client. The method returns list of billers</div>
            <table>
              <tr>
                <th>Header Parameters</th>
                <th></th> 
              </tr>
              <tr>
                <td>Content-Type</td>
                <td>application/json</td>
              </tr>
              <tr>
                <td>Appid</td>
                <td>To be sent via email</td>
              </tr>
            </table>
  
            <table>
                <tr>
                  <th>Request</th>
                  <th></th> 
                </tr>
                <tr>
                  <td>Method</td>
                  <td>POST</td>
                </tr>
                <tr>
                  <td>URL</td>
                  <td>api/spay/BillPaymtAdviceRequestISW</td>
                </tr>
              </table>
  
              <table>
                  <col width="100">
                  <col width="300">
                  <tr>
                    <th>Request Parameters</th>
                    <th></th> 
                  </tr>
                  <tr>
                    <th>Field</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>Referenceid</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        Unique number that identifies
                        transactions/request in the following
                        format:
                        Appid + yymmddHHmmss + random
                        numbers
                        Appid is to be padded with leading 0
                        to make up a total length of 5. E.g if
                        your appid is 25 then it should be
                        00025
                    </td>
                  </tr>
                  <tr>
                      <td>RequestType</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          Request type 107 represents Bill Payment Advice request
                      </td>
                  </tr>
                  <tr>
                      <td>Translocation</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Optional<br><br>
                          GPS location of channel of transaction in longitude & latitude
                      </td>
                  </tr>
                  <tr>
                    <td>amt</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        The amount for the item to be paid for. Gotten from the Getbiller method
                    </td>
                  </tr>
                  <tr>
                    <td>paymentcode</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        The paymentcode for the item to be paid for. Gotten from the Getbiller method
                    </td>
                  </tr>
                  <tr>
                    <td>mobile</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        Customer's mobile number
                    </td>
                  </tr>
                  <tr>
                    <td>email</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        Customer's email address
                    </td>
                  </tr>
                  <tr>
                    <td>SubscriberInfo1</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          The SubscriberInfo1 is the field that is hold the details of the customer that will enable the customer receive value. E.g DSTV smart card number
                    </td>
                  </tr>
                  <tr>
                    <td>ActionType</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        The ActionType is the field that holds the action type that the customer wants to carryout. E.g VTUP if the customer wants to top-up. The field should be left blank if the customer is not carrying out top-up
                    </td>
                  </tr>
                  <tr>
                    <td>nuban</td>
                    <td>
                        <span class="bold">Type</span> : String<br><br>
                        <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                        Customers account number to be debited
                    </td>
                  </tr>
              </table>
              
              <div>A sample request is shown below in JSON format (The content type header passed along in the request should specify that a JSON string is passed):</div>
              <div class="code-block">
                {<br>
                <span class="color-orange white-space">"Referenceid"</span> : <span class="color-purple">"00025170404241625982"</span>, <br>
                <span class="color-orange white-space">"RequestType"</span> : <span class="color-purple">"107"</span>,<br>
                <span class="color-orange white-space">"Translocation"</span> : <span class="color-purple">"6.587363,7.494737"</span>,<br>
                <span class="color-orange white-space">"amt"</span> : <span class="color-purple">"300"</span>,<br>
                <span class="color-orange white-space">"paymentcode"</span> : <span class="color-purple">"90090"</span>,<br>
                <span class="color-orange white-space">"mobile"</span> : <span class="color-purple">”0808898733”</span>,<br>
                <span class="color-orange white-space">"email"</span> : <span class="color-purple">”test@yahoo.com”</span>,<br>
                <span class="color-orange white-space">"SubscriberInfo1"</span> : <span class="color-purple">”1122334”</span>,<br>
                <span class="color-orange white-space">"ActionType"</span> : <span class="color-purple">""</span>,<br>
                <span class="color-orange white-space">"nuban"</span> : <span class="color-purple">”0005969437"</span>,<br>
                }
              </div>
              <div>Response codes and sample response data are shown below:</div>
                <div class="code-block">
                  <span class="response-type">Success Response</span>
                  <br><br>
                  {<br>
                  <span class="color-orange">"message"</span> : <span class="color-purple">"Operation was successful"</span>, <br>
                  <span class="color-orange">"response"</span> : <span class="color-purple">"00"</span>,<br>
                  <span class="color-orange">"data"</span> : <br>
                  {<br>
                  <span class="color-orange">"billerResponse"</span> : <span class="color-purple">70028 erminal owner not enabled for biller</span>,<br>
                  <span class="color-orange">"status"</span> : <span class="color-purple">"Successful"</span>,<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                  }
                  <br><br>
                  <!-- <span class="plain-text">Message has been accepted</span> <br>
                  <span class="plain-text">Please check HTTP header for appropriate HTTP status code</span>  <br> -->
                  <span class="plain-text">This method returns list of billers</span>       
                </div>
                <div class="code-block">
                    <span class="response-type">Error Response</span>
                    <br><br>
                    {<br>
                    <span class="color-orange white-space">"message"</span> : <span class="color-purple">"Unable to debit customers account"</span>, <br>
                    <span class="color-orange white-space">"response"</span> : <span class="color-purple">"x03"</span>,<br>
                    <span class="color-orange white-space">"data"</span> : <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;{<br>
                    <span class="color-orange more-white-space">"billerResponse"</span> : <span class="color-purple">"Unable to debit customers account"</span>,<br>
                    <span class="color-orange more-white-space">"status"</span> : <span class="color-purple">""</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    }
                    <br><br>
                    <span class="plain-text">Appropriate error message will be returned</span> <br>
                    <span class="plain-text">Please check HTTP header for appropriate HTTP status code </span>       
                  </div>
           </div>
           <div id="content-9">
              <div id="content-header">SBPM Wallet Request</div>
              <div>Accepts encrypted json string and returns encrypted json response to be decrypted by the calling client. The method returns list of billers</div>
              <table>
                <tr>
                  <th>Header Parameters</th>
                  <th></th> 
                </tr>
                <tr>
                  <td>Content-Type</td>
                  <td>application/json</td>
                </tr>
                <tr>
                  <td>Appid</td>
                  <td>To be sent via email</td>
                </tr>
              </table>
    
              <table>
                  <tr>
                    <th>Request</th>
                    <th></th> 
                  </tr>
                  <tr>
                    <td>Method</td>
                    <td>POST</td>
                  </tr>
                  <tr>
                    <td>URL</td>
                    <td>api/spay/SBPMWalletRequest</td>
                  </tr>
                </table>
    
                <table>
                    <col width="100">
                    <col width="300">
                    <tr>
                      <th>Request Parameters</th>
                      <th></th> 
                    </tr>
                    <tr>
                      <th>Field</th>
                      <th>Description</th>
                    </tr>
                    <tr>
                      <td>Referenceid</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>Unique number that identifies
                          transactions/request in the following
                          format:
                          Appid + yymmddHHmmss + random
                          numbers
                          Appid is to be padded with leading 0
                          to make up a total length of 5. E.g if
                          your appid is 25 then it should be
                          00025
                      </td>
                    </tr>
                    <tr>
                        <td>RequestType</td>
                        <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          Request type 108 represents wallet transaction</td>
                    </tr>
                    <tr>
                        <td>Translocation</td>
                        <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Optional<br><br>
                          GPS location of channel of transaction in longitude & latitude
                        </td>
                    </tr>
                    <tr>
                      <td>amt</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          The amount for the item to be paid for. Gotten from the Getbiller method
                      </td>
                    </tr>
                    <tr>
                      <td>tellerid</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          Tellerid is the teller’s id
                      </td>
                    </tr>
                    <tr>
                      <td>frmacct</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          The Account to be debited
                      </td>
                    </tr>
                    <tr>
                      <td>toacct </td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          The Account to be credited</td>
                    </tr>
                    <tr>
                      <td>exp_code </td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          The explanation code for the transaction
                      </td>
                    </tr>
                    <tr>
                      <td>paymentRef</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          The payment reference id that a user will type in
                      </td>
                    </tr>
                    <tr>
                      <td>remarks</td>
                      <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          Transaction remarks
                      </td>
                    </tr>
                </table>
                
                <div>A sample request is shown below in JSON format (The content type header passed along in the request should specify that a JSON string is passed):</div>
                <div class="code-block">
                  {<br>
                  <span class="color-orange white-space">"Referenceid"</span> : <span class="color-purple">"00025170404241625982"</span>, <br>
                  <span class="color-orange white-space">"RequestType"</span> : <span class="color-purple">"108"</span>,<br>
                  <span class="color-orange white-space">"Translocation"</span> : <span class="color-purple">"6.587363,7.494737"</span>,<br>
                  <span class="color-orange white-space">"amt"</span> : <span class="color-purple">"300"</span>,<br>
                  <span class="color-orange white-space">"tellerid"</span> : <span class="color-purple">"1111"</span>,<br>
                  <span class="color-orange white-space">"frmacct"</span> : <span class="color-purple">”0005969437”</span>,<br>
                  <span class="color-orange white-space">"toacct"</span> : <span class="color-purple">”0003474664”</span>,<br>
                  <span class="color-orange white-space">"exp_code"</span> : <span class="color-purple">”110”</span><br>
                  }
                </div>
                <div>Response codes and sample response data are shown below:</div>
                  <div class="code-block">
                    <span class="response-type">Success Response</span>
                    <br><br>
                    {<br>
                    <span class="color-orange">"message"</span> : <span class="color-purple">"Approved or completed successfully"</span>, <br>
                    <span class="color-orange">"response"</span> : <span class="color-purple">"00"</span>,<br>
                    <span class="color-orange">"data"</span> : <br>
                    {<br>
                    <span class="color-orange">"status"</span> : <span class="color-purple">"Successful"</span>,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                    }
                    <br><br>
                    <span class="plain-text">Message has been accepted</span> <br>
                    <span class="plain-text">Please check HTTP header for appropriate HTTP status code</span>      
                  </div>
                  <div class="code-block">
                      <span class="response-type">Error Response</span>
                      <br><br>
                      {<br>
                      <span class="color-orange white-space">"message"</span> : <span class="color-purple">"Transaction not permitted for the Appid user"</span>, <br>
                      <span class="color-orange white-space">"response"</span> : <span class="color-purple">"58"</span>,<br>
                      <span class="color-orange white-space">"data"</span> : <br>
                      &nbsp;&nbsp;&nbsp;&nbsp;{<br>
                      <span class="color-orange more-white-space">"status"</span> : <span class="color-purple">"Error"</span>,<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                      }
                      <br><br>
                      <span class="plain-text">Appropriate error message will be returned</span> <br>
                      <span class="plain-text">Please check HTTP header for appropriate HTTP status code </span>       
                    </div>
             </div>
             <div id="content-10">
                <div id="content-header">SBPT24txn Request</div>
                <div>Accepts encrypted json string and returns encrypted json response to be decrypted by the calling client. The method returns list of billers</div>
                <table>
                  <tr>
                    <th>Header Parameters</th>
                    <th></th> 
                  </tr>
                  <tr>
                    <td>Content-Type</td>
                    <td>application/json</td>
                  </tr>
                  <tr>
                    <td>Appid</td>
                    <td>To be sent via email</td>
                  </tr>
                </table>
      
                <table>
                    <tr>
                      <th>Request</th>
                      <th></th> 
                    </tr>
                    <tr>
                      <td>Method</td>
                      <td>POST</td>
                    </tr>
                    <tr>
                      <td>URL</td>
                      <td>api/spay/SBPT24txnRequest</td>
                    </tr>
                  </table>
      
                  <table>
                      <col width="100">
                      <col width="300">
                      <tr>
                        <th>Request Parameters</th>
                        <th></th> 
                      </tr>
                      <tr>
                        <th>Field</th>
                        <th>Description</th>
                      </tr>
                      <tr>
                        <td>Referenceid</td>
                        <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          Unique number that identifies
                            transactions/request in the following
                            format:
                            Appid + yymmddHHmmss + random
                            numbers
                            Appid is to be padded with leading 0
                            to make up a total length of 5. E.g if
                            your appid is 25 then it should be
                            00025
                        </td>
                      </tr>
                      <tr>
                          <td>RequestType</td>
                          <td>
                            <span class="bold">Type</span> : String<br><br>
                            <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                            Request type 109 represents wallet transaction
                          </td>
                      </tr>
                      <tr>
                          <td>Translocation</td>
                          <td>
                            <span class="bold">Type</span> : String<br><br>
                            <span class="bold">Presence Indicator</span> : Optional<br><br>
                            GPS location of channel of transaction in longitude & latitude
                          </td>
                      </tr>
                      <tr>
                        <td>amt</td>
                        <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          The amount for the item to be paid for. Gotten from the Getbiller method
                        </td>
                      </tr>
                      <tr>
                        <td>tellerid</td>
                        <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          Tellerid is the teller’s id
                        </td>
                      </tr>
                      <tr>
                        <td>frmacct</td>
                        <td>  
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          The Account to be debited
                        </td>
                      </tr>
                      <tr>
                        <td>toacct </td>
                        <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          The Account to be credited
                        </td>
                      </tr>
                      <tr>
                        <td>paymentRef</td>
                        <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          The payment reference id that a user will type in
                        </td>
                      </tr>
                      <tr>
                        <td>remarks</td>
                        <td>
                          <span class="bold">Type</span> : String<br><br>
                          <span class="bold">Presence Indicator</span> : Mandatory<br><br>
                          Transaction remarks
                        </td>
                      </tr>
                  </table>
                  
                  <div>A sample request is shown below in JSON format (The content type header passed along in the request should specify that a JSON string is passed):</div>
                  <div class="code-block">
                    {<br>
                    <span class="color-orange white-space">"Referenceid"</span> : <span class="color-purple">"00025170404241625982"</span>, <br>
                    <span class="color-orange white-space">"RequestType"</span> : <span class="color-purple">"108"</span>,<br>
                    <span class="color-orange white-space">"Translocation"</span> : <span class="color-purple">"6.587363,7.494737"</span>,<br>
                    <span class="color-orange white-space">"amt"</span> : <span class="color-purple">"300"</span>,<br>
                    <span class="color-orange white-space">"tellerid"</span> : <span class="color-purple">"1111"</span>,<br>
                    <span class="color-orange white-space">"frmacct"</span> : <span class="color-purple">”0005969437”</span>,<br>
                    <span class="color-orange white-space">"toacct"</span> : <span class="color-purple">”0003474664”</span>,<br>
                    <span class="color-orange white-space">"paymentRef"</span> : <span class="color-purple">”808080”</span>,<br>
                    <span class="color-orange white-space">"remarks"</span> : <span class="color-purple">“Pmt from Account A to Account B”</span>
                    }
                  </div>
                  <div>Response codes and sample response data are shown below:</div>
                    <div class="code-block">
                      <span class="response-type">Success Response</span>
                      <br><br>
                      {<br>
                      <span class="color-orange">"message"</span> : <span class="color-purple">"Approved or completed successfully"</span>, <br>
                      <span class="color-orange">"response"</span> : <span class="color-purple">"00"</span>,<br>
                      <span class="color-orange">"data"</span> : <br>
                      {<br>
                      <span class="color-orange">"status"</span> : <span class="color-purple">"Successful"</span>,<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                      }
                      <br><br>
                      <span class="plain-text">Message has been accepted</span> <br>
                      <span class="plain-text">Please check HTTP header for appropriate HTTP status code</span>      
                    </div>
                    <div class="code-block">
                        <span class="response-type">Error Response</span>
                        <br><br>
                        {<br>
                        <span class="color-orange white-space">"message"</span> : <span class="color-purple">"Transaction not permitted for the Appid user"</span>, <br>
                        <span class="color-orange white-space">"response"</span> : <span class="color-purple">"-100"</span>,<br>
                        <span class="color-orange white-space">"data"</span> : <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;{<br>
                        <span class="color-orange more-white-space">"status"</span> : <span class="color-purple">"Error"</span>,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                        }
                        <br><br>
                        <span class="plain-text">Appropriate error message will be returned</span> <br>
                        <span class="plain-text">Please check HTTP header for appropriate HTTP status code </span>       
                      </div>
               </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
var activeContentID = "1";
var highlightColor = "#f71d3ad8";
var colorBlack = "black";
var selectBox;

export default {
  data () {
    return {
    //   msg: 'Welcome to Your Vue.js App'
    }
  },

  mounted() { 
    const { firstTopic, firstContent } = this.$refs

    firstTopic.style.color = highlightColor;
    firstContent.style.display = "block";

  },

  methods: {
      navigateTo(page) {
           this.$router.push(page); 
      },

      showContent(id){
        document.getElementById("content-"+activeContentID).style.display = "none";
        document.getElementById("content-"+id).style.display = "block";
        document.getElementById("topic-"+activeContentID).style.color = colorBlack;
        document.getElementById("topic-"+id).style.color = highlightColor;
        activeContentID = id;
        window.scrollTo(0, 0);
      }
      
  }
  
}
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'Graphik';
    font-weight: normal;
    src: url('/fonts/graphik/Graphik-Regular.eot'); /* IE9 Compat Modes */
    src: url('/fonts/graphik/Graphik-Regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/fonts/graphik/Graphik-Regular.woff') format('woff'), /* Modern Browsers */
         url('/fonts/graphik/Graphik-Regular.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/fonts/graphik/Graphik-Regular.svg#Graphik-Regular') format('svg'); /* Legacy iOS */
    text-rendering: optimizeLegibility;
}

@font-face {
    font-family: 'Graphik';
    font-weight: bold;
    src: url('/fonts/graphik/Graphik-Medium.eot'); /* IE9 Compat Modes */
    src: url('/fonts/graphik/Graphik-Medium.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/fonts/graphik/Graphik-Medium.woff') format('woff'), /* Modern Browsers */
         url('/fonts/graphik/Graphik-Medium.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/fonts/graphik/Graphik-Medium.svg#Graphik-Medium') format('svg'); /* Legacy iOS */
    text-rendering: optimizeLegibility;
}

body{
    font-family: "Graphik";
    font-weight: normal;
}

.title{
    font-size: 23px;
    font-weight: bold;
}

.white-space{
    margin-left: 17px;
}

.more-white-space{
    margin-left: 34px;
}

#nav{
    padding-top: 15px;
    padding-bottom: 15px;
    position: fixed;
    background: transparent;
    z-index: 200;
    width: 100%;
}

#topics, #contents{
    margin-top: 110px;
}

#topics{
    position: fixed;
}

#topics > div{
    margin-bottom: 32px;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
}

#topics .outline-title{
    font-size: 13px;
    color: grey;
    cursor: text;
}

.sterling-color{
    color: #941c12;
    color: #f71d3ad8;
    color: rgb(230, 42, 67);
}

#contents #content-header{
    font-size: 32px;
    font-weight: bold;
    line-height: 35px;
}

#contents div, table{
    font-size: 17px;
    line-height: 28px;
    margin-bottom: 40px;
}

table {
    width:100%;
    font-size: 15px;
}
table, th, td {
    border: 0.09px solid rgba(128, 128, 128, 0.397);
    border-collapse: collapse;
}
th, td {
    padding: 15px;
    text-align: left;
}

table th {
    background-color: rgba(226, 231, 247, 0.205);
    color: black;
}

#contents .code-block{
    /* font-family: "Monospace"; */
    font-size: 13.6px;
    border: 1px solid rgba(128, 128, 128, 0.226);
    border-radius: 5px;
    padding: 20px 25px 20px;
    background-color: rgba(226, 231, 247, 0.253);
}

#contents > div{
    display: none;
}

// #contents #content-1{
//   display: block;
// }

.color-orange{
    color: rgba(245, 123, 53, 0.863);
}

.color-purple{
    color: rgba(172, 95, 216, 0.822);
}

.code-block .response-type{
    font-size: 16px;
    font-weight: bold;
}

.code-block .plain-text{
    font-size: 16px;
}

.bold{
    font-weight: bold;
}

/* #topic-dropdown {
    border: 1px solid #ccc;
    width: 230px;
    border-radius: 3px;
    overflow: hidden;
    background: #fafafa url("img/icon-select.png") no-repeat 90% 50%;
}

#topic-dropdown select {
    padding: 5px 8px;
    width: 130%;
    border: none;
    box-shadow: none;
    background: transparent;
    background-image: none;
    -webkit-appearance: none;
}

#topic-dropdown select:focus {
    outline: none;
} */

#topic-dropdown {
    padding: 0;
    float: right;
    margin-right: 20px;
    margin-top: 3px;
    border: 1px solid #ccc;
    width: 213px;
    height: 28px;
    border-radius: 3px;
    overflow: hidden;
    background-color: #fff;
    background: #fff;
    position: relative;
}

#topic-dropdown:after {
    top: 50%;
    left: 89%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(0, 0, 0, 0);
    border-top-color: #000000;
    border-width: 5px;
    margin-top: -2px;
    z-index: 100;
}

#topic-dropdown select {
    padding: 3.5px 12px;
    width: 130%;
    border: none;
    box-shadow: none;
    background-color: transparent;
    background-image: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

#topic-dropdown select:focus {
    outline: none;
}


@media screen and (max-width: 767px){

    #nav{
       background: white;
    }
    #contents #content-header{
        font-size: 24px;
        font-weight: bold;
    }

    #contents div, table{
        font-size: 15px;
    }

    table{
        font-size: 13px;
    }

    .title{
        font-size: 19px;
    }

    #topic-dropdown {
        margin-top: 0px;
        /* font-size: 12px; */
    }

    .code-block .plain-text{
        font-size: 15px;
    }
    

}

/* @media screen and (max-width: 414px){
    #contents #content-header{
        font-size: 24px;
        font-family: "Graphik Medium";
    }

    #contents div, table{
        font-size: 15px;
    }

    table{
        font-size: 13px;
    }
    
} */

@media screen and (max-width: 375px){
    #topic-dropdown {
        width: 190px;
    }

}

@media screen and (max-width: 360px){
    #topic-dropdown {
        width: 160px;
    }

}
</style>
