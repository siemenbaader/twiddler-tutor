Smalltalk current createPackage: 'Tutor'!
Widget subclass: #Tutor
	instanceVariableNames: 'count header root keys columns'
	package: 'Tutor'!

!Tutor methodsFor: 'not yet classified'!

initialize
	"comment stating purpose of message"
	columns := Dictionary new.
	columns
		at: 'l' put: 1;  
		at: 'm' put: 2;
		at: 'r' put: 3.
	
	keys := Array new.
	4 timesRepeat:[keys add: Array new.].
!

keys
	^ keys.
!

remove
	"removes all classes of .keypad from the DOM."

	'.keypad' asJQuery remove.
!

renderOn: html
	"Draw the keypad"

	root := html div
		class: 'keypad' ;
		with: [
			html style: 
				'.keypad .border {
					box-sizing: border-box;
					border: 1px solid black;
					border-radius: 10px; 
					width: 140px; height: 260px;
					position: relative;
				}
				
				.keypad .mod-button {
					box-sizing: border-box;
					position: absolute;
					border: 1px solid gray;
					height: 20px;
					width: 20px;
					border-radius: 10px;
				}
				
				.keypad .key {
					box-sizing: border-box;
					position: absolute;
					border: 1px solid black;
					height: 20px;
					width: 20px;
					border-radius: 4px;
				}
				
				.keypad .key.pressed {
					background-color: black;
					color: white;
				}
				'.
				
			html div 
				class: 'border'; 
				with: [ 
					html div class: 'mod-button'; style: 'left: 20px; top: 40px;'.
					html div class: 'mod-button'; style: 'left: 40px; top: 20px;'.
					html div class: 'mod-button'; style: 'left: 80px; top: 20px;'.
					html div class: 'mod-button'; style: 'left: 100px; top: 40px;'.
					
					
					1 to: 4 do: [:row |  
						columns values do: [:col |
							(keys at: row ifAbsent: 'Flo') at: col put: (html div class: 'key'; style: 'left:', ((20 + (col - 1 * 40)) asString), 'px; top:',  ((100 + (row - 1 * 40)) asString) , 'px').
						].
					].
				].
		].
!

showChord: chord
	"I highlight the buttons of the chord. Chord string format is top-to-bottom 'm0rl'"
	
	| row col | 
	
	self clearChord.
	
	chord withIndexDo: [:letter :index |
			
		letter == '0' ifFalse:[
			col := columns at: letter.
			row := index.
			
			((keys at: row) at: col) asJQuery addClass: 'pressed'.
		]
	]
!

clearChord
	"Shows all buttons as released"
	
	keys do: [:row |
		row do: [:key |
			key asJQuery removeClass: 'pressed'.
		].
	].
! !

Tutor class instanceVariableNames: 'instance'!

!Tutor class methodsFor: 'not yet classified'!

begin
	"create the keypad and embed it into the page"
	|button|
	
	button := '<button>Re-Create</button>' asJQuery 
		click: [
			instance remove.
			instance := self new.
			instance appendToJQuery: 'body' asJQuery. 	
		].
		
	button appendTo: 'body' asJQuery.
	
	instance := self new.
	instance appendToJQuery: 'body' asJQuery.
!

instance
	^ instance
! !

