Smalltalk current createPackage: 'Tutor'!
Widget subclass: #Lesson
	instanceVariableNames: ''
	package: 'Tutor'!

!Lesson methodsFor: 'not yet classified'!

renderOn: html
	"The lesson area shows a line of text, shows the chord for the next letter or letter sequence to be typed, and tracks the user's speed and accuracy."

	html div: [
		html style: '
			.lesson {
				float: left;
				padding-left: 30px;
				height: 260px;
				box-sizing: border-box;
			}
			
			.lesson .exercise-text {
				font-family: monospace;
				font-size: 20px;
			}
			.lesson .letters-to-type {
				background-color: #AAD;
				outline: 2px solid #AAD;
			}
			
			.lesson .error {
				color: red;
			}
			.lesson .caret {
				color: blue;
			}
		' .
		
		html div
			class: 'lesson' ; 
			with: [
				html h1: 'Lesson 1'.
				html br.
				html div 
					class: 'exercise-text';
					with: [
						html p: [
							html span: 'We used to cut t'.
							html span class: 'letters-to-type'; with: 'h'.
							html span: 'e green green grass.'.
						].
						html p: [
							html span: 'We u'.
							html span class: 'error'; with: 'f'.
							html span: 'ed to '.
							html span class: 'error'; with: 'l'.
							html span: 'ut  t'.
							html span class: 'caret'; with: '_'
						]
					].
				
			]
		]
! !

Widget subclass: #Tutor
	instanceVariableNames: 'twiddlerKeypad lesson'
	package: 'Tutor'!

!Tutor methodsFor: 'not yet classified'!

initialize
	"Set up the whole application object with a keypad and a lesson screen."
	twiddlerKeypad := TwiddlerKeypad new.
	lesson := Lesson new.
!

renderOn: html
	"render the whole application"

	html style: 
		' .menu-bar {
		}'.
	
	html div
		class: 'menu-bar';
		with: [ 
			html button 
				with: 'Recreate App';
				onClick: [Tutor begin].
			
			html button
				with: 'More button';
				onClick: [Transcript show: 'more clicked'].
				
			html select
				with: [
					html option with: 'lesson 1'; value: '1'.
					html option with: 'lesson 2'; value: '2'.
				].
			].
			
			html hr.
			
			html div
				with: [
					html with: twiddlerKeypad.
					html with: lesson.
				].
			html div style: 'clear: both'; class: 'clearfix'.
!

twiddlerKeypad
	^ twiddlerKeypad.
! !

Tutor class instanceVariableNames: 'instance'!

!Tutor class methodsFor: 'not yet classified'!

begin
	"create the button, keypad and lesson and embed them into the page"

	'#tutor' asJQuery empty.
	
	instance := self new appendToJQuery: ('#tutor' asJQuery) ; yourself.
!

instance
	^instance.
! !

Widget subclass: #TwiddlerKeypad
	instanceVariableNames: 'count header root keys columns keyToChordMap'
	package: 'Tutor'!

!TwiddlerKeypad methodsFor: 'not yet classified'!

chordFor: keySequence
	"Looks up the chord matching the key(s), indicated by a one or more digit string; or integer key code."
	
	^ keyToChordMap at: keySequence.
!

clearChord
	"Shows all buttons as released"
	
	keys do: [:row |
		row do: [:key |
			key asJQuery removeClass: 'pressed'.
		].
	].
!

initialize
	"comment stating purpose of message"
	columns := Dictionary new.
	columns
		at: 'l' put: 3;
		at: 'm' put: 2;
		at: 'r' put: 1.
	
	keys := Array new.
	4 timesRepeat:[keys add: Array new.].
	
	keyToChordMap := Dictionary new.
	
	self keyConfiguration linesDo: [:line | 
		| trimmedLine tokens |
		trimmedLine := (line trimBoth tokenize: '#') at: 1.
		trimmedLine == '' ifFalse: [
			tokens := trimmedLine tokenize: '\s+' asRegexp.
			((tokens at: 4) match: '".+"') ifTrue: [
				keyToChordMap at: ((tokens at: 4)trimBoth: '"') put: (tokens at: 2 ).
			]
		]
	].
	Transcript show: keyToChordMap.
!

keyConfiguration
	^ '# The TabSpace Twiddler Keymap

# Brandon Craig Rhodes http://www.rhodesmill.org/brandon
# Version 0.3, Monday 15 November 1999
# May be shared and modified if credited

# The three top buttons map to the most frequently used keys.  Note
# that in sane command line environments (those that support
# completions), tab is used nearbyly as much as backspace and both are
# often used many times per line (so we make them more convenient than
# a carriage return).

0     r000 = BACKSPACE
0     m000 = 32
0     l000 = TAB

# Next are the nine most common letters, which can each be produced
# with a single keypress.  They are carefully arranged so that the
# most common combinations of them can be pressed simultaneously to
# produce double letters.  In each case the double letter combinations
# output their two constituent letters in the most common order
# (though with some such as er-re it was a close call).  The doubles
# can be expected to account for roughly one-third of the adjacent
# letter pairs in normal English text!!

0     0m00 = "e"
0     00m0 = "t"
0     000m = "h"
0     0l00 = "o"
0     00l0 = "r"
0     000l = "s"
0     0r00 = "i"
0     00r0 = "n"
0     000r = "a"

# 0     0r0r = "ai"
# 0     0r0m = "hi"
# 0     0r0l = "is"
# 0     0rr0 = "in"
# 0     0rm0 = "it"
# 0     0rl0 = "ri"
# 0     0m0r = "ea"
# 0     0m0m = "he"
# 0     0m0l = "es"
# 0     0mr0 = "en"
# 0     0mm0 = "te"
# 0     0ml0 = "er"
# 0     0l0r = "oa"
# 0     0l0m = "ho"
# 0     0l0l = "so"
# 0     0lr0 = "on"
# 0     0lm0 = "to"
# 0     0ll0 = "or"
# 0     00rr = "an"
# 0     00rm = "hn"
# 0     00rl = "ns"
# 0     00mr = "at"
# 0     00mm = "th"
# 0     00ml = "st"
# 0     00lr = "ar"
# 0     00lm = "hr"
# 0     00ll = "rs"

# Every other letter is produced by pressing the top middle button
# (the spacebar) and some combination of the lower keys.  It is
# expected that during normal typing the index finger will stay on the
# spacebar.  A few combinations that involve these second-tier letters
# are also supported.

0     mm00 = "d"
0     m0m0 = "l"
0     m00m = "m"
0     mr00 = "c"
0     m0r0 = "f"
0     m00r = "g"
0     ml00 = "u"
0     m0l0 = "w"
0     m00l = "y"
0     mmm0 = "p"
0     m0mm = "k"
0     mrr0 = "b"
0     m0rr = "j"
0     mll0 = "v"
0     m0ll = "x"
0     mm0m = "q"
0     ml0l = "z"

#0     mlr0 = "of"
#0     mmr0 = "nd"
#0     mr0m = "ch"
#0     ml0m = "qu"
#0     m0lm = "wh"

# Finally, we support some three-letter combinations.  As above, note
# that they are produced simply by pressing all of their letters
# simulateously.

# 0     0mmm = "the"
# 0     0rrr = "ain"
# 0     0mlr = "are"
# 0     mrrr = "ing"
# 0     mmrr = "and"
# 0     mlrr = "ong"

# As everyone knows, keypads are supposed to be three by three.

0     rr00 = "1"
0     rm00 = "2"
0     rl00 = "3"
0     r0r0 = "4"
0     r0m0 = "5"
0     r0l0 = "6"
0     r00r = "7"
0     r00m = "8"
0     r00l = "9"
0     rrr0 = "0"
0     rmm0 = "."
0     rll0 = "-"

# Below the number keypad we place three tiers of mathematical
# operators and symbols.  First come the arithmetic operators, which
# we cascade off of the minus sign.

0     rlm0 = "+"
0     rlr0 = "^"
0     rl0l = "/"
0     rl0m = "*"
0     rl0r = "%"

# The middle tier of operators include those usually used for logic
# operations.

0     rmr0 = "&"
0     rml0 = "|"
0     rm0m = "~"
0     rm0r = "^"

# The double key combinations along the bottom two rows
# produce the comparitive operators.  Note that the greater than and
# less than symbols, which we also use as angle brackets, are in
# positions similar to all other brackets (see below).

0     r0rr = "<"
0     r0mm = ">"
0     r0ll = "="

# The last major section involves punctuation.  The period, comma, and
# enter key are both intended to be very easy to press.  The semicolon
# is of course produced by pressing period and comma simultaneously.
# Quotes and brackets are also available here.

0     ll00 = "."
0     lll0 = ";"
0     l0l0 = ","
0     l0ll = ":"
0     l00l = 34		# quotation mark
0     l00m = ""
0     l00r = "`"
0     mmmm = 13,10 # ENTER
0     lr00 = "-"
0     lrr0 = "["
0     lmm0 = "]"
0     l0r0 = "("
0     l0m0 = ")"
0     l0rr = "{"
0     l0mm = "}"

# Now that we have exhausted the same-row combinations of the lower
# three keys, we place two more echelons of symbols: one of textual
# punctuation, and the other of more obscure symbols more often
# encountered in programming (and computer typesetting).  People who
# use such keys exceedingly often may have cause to be upset with me.

0     llm0 = "?"
0     llr0 = "!!"
0     ll0l = "$"
0     ll0m = "#"
0     ll0r = "~"
0     llll = "@"
0     llmm = "&"

0     lmr0 = "/"
0     lml0 = "\\"
0     lm0m = "_"
0     lm0r = "%"

# The FN modifier has no useful native function under X-windows
# (unlike the Shift, CTRL, and ALT modifiers), so we use it for useful
# keystrokes that need to be easy to get to.  Hitting single keys with
# FUNC give an arrow key rose and other screen navigation sequences.
# This is also where we put important codes like Escape, Delete, Null,
# and Linefeed.

NUM  r000 = 127            # func + BACKSPACE = delete (ascii rubout)
NUM  m000 = NULL           # func + SPACE = null
NUM  l000 = ESCAPE         # func + TAB = ESCAPE
NUM  lm00 = 10             # func + ENTER = linefeed
NUM  0m00 = 20,"FF52",20   # XK_Up
NUM  00m0 = 20,"FF54",20   # XK_Down
NUM  0r00 = 20,"FF51",20   # XK_Left
NUM  0l00 = 20,"FF53",20   # XK_Right
NUM  00r0 = 20,"FF55",20   # XK_Page_Up
NUM  000r = 20,"FF56",20   # XK_Page_Down
NUM  00l0 = 20,"FF95",20   # XK_Home
NUM  000l = 20,"FF9C",20   # XK_End
NUM  000m = 20,"FF9E",20   # XK_Insert

# FUNC + keypad produces function keys.

NUM  rr00 = 20,"FFBE",20   # XK_F1
NUM  rm00 = 20,"FFBF",20   # XK_F2
NUM  rl00 = 20,"FFC0",20   # XK_F3
NUM  r0r0 = 20,"FFC1",20   # XK_F4
NUM  r0m0 = 20,"FFC2",20   # XK_F5
NUM  r0l0 = 20,"FFC3",20   # XK_F6
NUM  r00r = 20,"FFC4",20   # XK_F7
NUM  r00m = 20,"FFC5",20   # XK_F8
NUM  r00l = 20,"FFC6",20   # XK_F9
NUM  rrr0 = 20,"FFC7",20   # XK_F10
NUM  rmm0 = 20,"FFC8",20   # XK_F11
NUM  rll0 = 20,"FFC9",20   # XK_F12

# I feel like I should throw these in somewhere so here they are:

num   00mm = CAPS_LOCK
num   00rr = NUM_LOCK
num   00ll = SCROLL_LOCK
'
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
		style: 'float: left';
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

showChordFor: keySequence
	"I visually display a chord for the given letter or letter sequence"
	
	self showChord: (self chordFor: keySequence).
! !

TwiddlerKeypad class instanceVariableNames: 'instance'!

!TwiddlerKeypad class methodsFor: 'not yet classified'!

begin
	"create the button, keypad and lesson and embed them into the page"

	'#tutor' asJQuery empty.
	
	instance := self new.
	
	self appendToJQuery: '#tutor' asJQuery.
!

instance
	^ instance
!

renderOn: html
	"render the whole application"

	html div 
		with: html button; 
			with: 'Recreate App';
			click: Transcript show: 'clicked'.
! !

