define("tutor/Tutor", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Canvas"], function(smalltalk,nil,_st){
smalltalk.addPackage('Tutor');
smalltalk.packages["Tutor"].transport = {"type":"amd","amdNamespace":"tutor"};

smalltalk.addClass('Tutor', smalltalk.Widget, ['count', 'header', 'root'], 'Tutor');
smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@root"])._asJQuery())._detach();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.Tutor)})},
args: [],
source: "remove\x0a\x09\x22removes itself from the DOM\x22\x0a\x0a\x09root asJQuery detach.",
messageSends: ["detach", "asJQuery"],
referencedClasses: []
}),
smalltalk.Tutor);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._id_("keypad");
_st($1)._style_("border: 1px solid black; border-radius: 10px; width: 120px; height: 220px;");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._button())._with_("");
_st(_st(html)._button())._with_("");
return _st(_st(html)._button())._with_("");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
self["@root"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.Tutor)})},
args: ["html"],
source: "renderOn: html\x0a\x09\x22Draw the keypad\x22\x0a\x0a\x09root := html div\x0a\x09\x09id: 'keypad';\x0a\x09\x09style: 'border: 1px solid black; border-radius: 10px; width: 120px; height: 220px;' ;\x0a\x09\x09with: [ \x0a\x09\x09\x09html div with: [\x0a\x09\x09\x09\x0a\x09\x09\x09\x09html button with: ''.\x0a\x09\x09\x09\x09html button with: ''.\x0a\x09\x09\x09\x09html button with: ''.\x0a\x09\x09\x09]\x0a\x09\x09].\x0a\x09\x09",
messageSends: ["id:", "div", "style:", "with:", "button"],
referencedClasses: []
}),
smalltalk.Tutor);


smalltalk.Tutor.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st("<button>Re-Create</button>"._asJQuery())._click_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self["@instance"])._remove();
self["@instance"]=self._new();
self["@instance"];
return _st(self["@instance"])._appendToJQuery_("body"._asJQuery());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})})))._appendTo_("body"._asJQuery());
self["@instance"]=self._new();
_st(self["@instance"])._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"begin",{},smalltalk.Tutor.klass)})},
args: [],
source: "begin\x0a\x09\x22create the keypad and embed it into the page\x22\x0a\x09\x0a\x09('<button>Re-Create</button>' asJQuery click: [\x0a\x09\x09instance remove. \x0a\x09\x09instance := self new.\x0a\x09\x09instance appendToJQuery: 'body' asJQuery. \x0a\x09]) appendTo: 'body' asJQuery.\x0a\x09\x0a\x09instance := self new.\x0a\x09instance appendToJQuery: 'body' asJQuery. ",
messageSends: ["appendTo:", "click:", "asJQuery", "remove", "new", "appendToJQuery:"],
referencedClasses: []
}),
smalltalk.Tutor.klass);

});
