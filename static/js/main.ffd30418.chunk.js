(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(t,e,s){t.exports=s(21)},,,,,,function(t,e,s){},function(t,e,s){t.exports=s.p+"static/media/logo.5d5d9eef.svg"},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var a=s(0),r=s.n(a),h=s(9),i=s.n(h),o=(s(16),s(17),s(18),s(7)),c=s(2),n=s(3),d=s(6),f=s(4),l=s(1),B=s(5),u=(s(19),function(t){function e(t){var s;return Object(c.a)(this,e),(s=Object(d.a)(this,Object(f.a)(e).call(this,t))).clickHandler=s.clickHandler.bind(Object(l.a)(s)),s.state={afterClick:!1},s.id=null,s}return Object(B.a)(e,t),Object(n.a)(e,[{key:"clickHandler",value:function(t){if(2!==this.props.player&&!this.props.haveClicked&&!this.props.finish){this.props.position;this.setState({haveClicked:!0,afterClick:!0}),this.props.clickChess(this.props.position,this.props.player)}}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var t="";return 1===this.props.playerColor&&(t="blackCircle"),2===this.props.playerColor&&(t="redCircle"),r.a.createElement("div",{className:"chess",value:this.props.position,onClick:this.clickHandler},r.a.createElement("div",{className:t}))}}]),e}(a.Component));u.defaultProps={width:"30px",height:"30px"};var v=u,p=(s(20),function(t){function e(t){var s;return Object(c.a)(this,e),(s=Object(d.a)(this,Object(f.a)(e).call(this,t))).state={newGame:!0,player:1,chess:[],gameState:[],chessBoard:[],click:[],FirstTime:!0,MachineLeading:!1,machineFirst:200},s.clickChess=s.clickChess.bind(Object(l.a)(s)),s.checkWinner=s.checkWinner.bind(Object(l.a)(s)),s.reset=s.reset.bind(Object(l.a)(s)),s.machineResponse=s.machineResponse.bind(Object(l.a)(s)),s.checkMachineLeading=s.checkMachineLeading.bind(Object(l.a)(s)),s.playerHasThreeConnect=s.playerHasThreeConnect.bind(Object(l.a)(s)),s.playerHasFour=s.playerHasFour.bind(Object(l.a)(s)),s.machineHasThreeConnect=s.machineHasThreeConnect.bind(Object(l.a)(s)),s.intervalChecking=s.intervalChecking.bind(Object(l.a)(s)),s.playerGeneralThree=s.playerGeneralThree.bind(Object(l.a)(s)),s.twoBlankOne=s.twoBlankOne.bind(Object(l.a)(s)),s.twoBlankTwo=s.twoBlankTwo.bind(Object(l.a)(s)),s.generalLogic=s.generalLogic.bind(Object(l.a)(s)),s}return Object(B.a)(e,t),Object(n.a)(e,[{key:"componentDidMount",value:function(){for(var t=[],e=[],s=[],a=[],r=0;r<196;r++)e.push(0),t.push(r),s.push(0),a.push(!1);this.setState({chess:t,game:e,chessBoard:s})}},{key:"clickChess",value:function(t,e){var s=this,a=Object(o.a)(this.state.chessBoard);a[t]=e;var r=Object(o.a)(this.state.click);r[t]=!0,1===this.state.player&&(this.setState({player:2,chessBoard:a,newGame:!1,click:r}),setTimeout(function(){s.machineResponse(a,r,t),console.log("player ",s,s.playerHasThreeConnect())},500)),2===this.state.player&&this.setState({player:1,chessBoard:a,newGame:!1,click:r,FirstTime:!1})}},{key:"machineHasThreeConnect",value:function(){for(var t=0,e=0;e<196;e++){var s=Math.floor(e/14),a=14*s,r=14*(s+1)-1;t=0;for(var h=0;h<4;h++)if(3!==h&&e+h<=r&&2===this.state.chessBoard[e+h]&&t++,3===h&&e-1>=a&&e+h<=r&&0===this.state.chessBoard[e+h]&&0===this.state.chessBoard[e-1]&&3===t)return e+h;t=0;for(h=0;h<4;h++)if(3!==h&&e+14*h<196&&2===this.state.chessBoard[e+14*h]&&t++,3===h&&e-14>=0&&e+14*h<196&&0===this.state.chessBoard[e+14*h]&&0===this.state.chessBoard[e-14]&&3===t)return e+14*h;t=0;for(h=0;h<4;h++){var i=14*(c=s+h),o=14*(c+1)-1;if(c>=0&&c<=13&&e+15*h>=i&&e+15*h<=o&&(3!==h&&2===this.state.chessBoard[e+15*h]&&t++,3===h&&0===this.state.chessBoard[e+15*h]&&0===this.state.chessBoard[e-15]&&e-15<=14*c-1&&e-15>=14*(s-1)&&3===t))return e+15*h}t=0;for(h=0;h<4;h++){var c;i=14*(c=s+h),o=14*(c+1)-1;if(c>=0&&c<=13&&e+13*h>=i&&e+13*h<=o&&(3!==h&&2===this.state.chessBoard[e+13*h]&&t++,3===h&&0===this.state.chessBoard[e+13*h]&&0===this.state.chessBoard[e-13]&&e-13<=14*s-1&&e-13>=14*(s-1)&&3===t))return e+13*h}t=0}return 200}},{key:"playerHasThreeConnect",value:function(){for(var t=0,e=0;e<196;e++){var s=Math.floor(e/14),a=14*s,r=14*(s+1)-1;t=0;for(var h=0;h<4;h++)if(3!==h&&e+h<=r&&1===this.state.chessBoard[e+h]&&t++,3===h&&e-1>=a&&e+h<=r&&0===this.state.chessBoard[e+h]&&0===this.state.chessBoard[e-1]&&3===t)return e+h;t=0;for(h=0;h<4;h++)if(3!==h&&e+14*h<196&&1===this.state.chessBoard[e+14*h]&&t++,3===h&&e-14>=0&&e+14*h<196&&0===this.state.chessBoard[e+14*h]&&0===this.state.chessBoard[e-14]&&3===t)return e+14*h;t=0;for(h=0;h<4;h++){var i=14*(c=s+h),o=14*(c+1)-1;if(c>=0&&c<=13&&e+15*h>=i&&e+15*h<=o&&(3!==h&&1===this.state.chessBoard[e+15*h]&&t++,3===h&&0===this.state.chessBoard[e+15*h]&&0===this.state.chessBoard[e-15]&&e-15<=14*c-1&&e-15>=14*(s-1)&&3===t))return e+15*h}t=0;for(h=0;h<4;h++){var c;i=14*(c=s+h),o=14*(c+1)-1;if(c>=0&&c<=13&&e+13*h>=i&&e+13*h<=o&&(3!==h&&1===this.state.chessBoard[e+13*h]&&t++,3===h&&0===this.state.chessBoard[e+13*h]&&0===this.state.chessBoard[e-13]&&e-13<=14*s-1&&e-13>=14*(s-1)&&3===t))return e+13*h}t=0}return 200}},{key:"checkMachineLeading",value:function(){for(var t=0,e=0;e<196;e++){for(var s=Math.floor(e/14),a=14*s,r=14*(s+1)-1,h=0;h<5;h++)if(4!==h&&e+h<=r&&2===this.state.chessBoard[e+h]&&t++,4===h&&e+h<=r&&0===this.state.chessBoard[e+h]&&4===t)return console.log(this.state.chessBoard[e+0],this.state.chessBoard[e+1],this.state.chessBoard[e+2],this.state.chessBoard[e+3],this.state.chessBoard[e+4]),e+h;t=0;for(h=0;h<5;h++)if(4!==h&&e-h>=a&&2===this.state.chessBoard[e-h]&&t++,4===h&&e-h>=a&&0===this.state.chessBoard[e-h]&&4===t)return e-h;t=0;for(h=0;h<5;h++)if(4!==h&&e+14*h<196&&2===this.state.chessBoard[e+14*h]&&t++,4===h&&e+14*h<196&&0===this.state.chessBoard[e+14*h]&&4===t)return e+14*h;t=0;for(h=0;h<5;h++)if(4!==h&&e-14*h>=0&&2===this.state.chessBoard[e-14*h]&&t++,4===h&&e-14*h>=0&&0===this.state.chessBoard[e-14*h]&&4===t)return e-14*h;t=0;for(h=0;h<5;h++){var i=14*(c=s+h),o=14*(c+1)-1;if(c>=0&&c<=13&&e+15*h>=i&&e+15*h<=o&&(4!==h&&2===this.state.chessBoard[e+15*h]&&t++,4===h&&0===this.state.chessBoard[e+15*h]&&4===t))return e+15*h}t=0;for(h=0;h<5;h++){i=14*(c=s-h),o=14*(c+1)-1;if(c>=0&&c<=13&&e-15*h>=i&&e-15*h<=o&&(4!==h&&2===this.state.chessBoard[e-15*h]&&t++,4===h&&0===this.state.chessBoard[e-15*h]&&4===t))return e-15*h}t=0;for(h=0;h<5;h++){i=14*(c=s-h),o=14*(c+1)-1;if(c>=0&&c<=13&&e-13*h>=i&&e-13*h<=o&&(4!==h&&2===this.state.chessBoard[e-13*h]&&t++,4===h&&0===this.state.chessBoard[e-13*h]&&4===t))return e-13*h}t=0;for(h=0;h<5;h++){var c;i=14*(c=s+h),o=14*(c+1)-1;if(c>=0&&c<=13&&e+13*h>=i&&e+13*h<=o&&(4!==h&&2===this.state.chessBoard[e+13*h]&&t++,4===h&&0===this.state.chessBoard[e+13*h]&&4===t))return e+13*h}t=0}return 200}},{key:"playerHasFour",value:function(){for(var t=0,e=0;e<196;e++){for(var s=Math.floor(e/14),a=14*s,r=14*(s+1)-1,h=0;h<5;h++)if(4!==h&&e+h<=r&&1===this.state.chessBoard[e+h]&&t++,4===h&&e+h<=r&&0===this.state.chessBoard[e+h]&&4===t)return e+h;t=0;for(h=0;h<5;h++)if(4!==h&&e-h>=a&&1===this.state.chessBoard[e-h]&&t++,4===h&&e-h>=a&&0===this.state.chessBoard[e-h]&&4===t)return e-h;t=0;for(h=0;h<5;h++)if(4!==h&&e+14*h<196&&1===this.state.chessBoard[e+14*h]&&t++,4===h&&e+14*h<196&&0===this.state.chessBoard[e+14*h]&&4===t)return e+14*h;t=0;for(h=0;h<5;h++)if(4!==h&&e-14*h>=0&&1===this.state.chessBoard[e-14*h]&&t++,4===h&&e-14*h>=0&&0===this.state.chessBoard[e-14*h]&&4===t)return e-14*h;t=0;for(h=0;h<5;h++){var i=14*(c=s+h),o=14*(c+1)-1;if(c>=0&&c<=13&&e+15*h>=i&&e+15*h<=o&&(4!==h&&1===this.state.chessBoard[e+15*h]&&t++,4===h&&0===this.state.chessBoard[e+15*h]&&4===t))return e+15*h}t=0;for(h=0;h<5;h++){i=14*(c=s-h),o=14*(c+1)-1;if(c>=0&&c<=13&&e-15*h>=i&&e-15*h<=o&&(4!==h&&1===this.state.chessBoard[e-15*h]&&t++,4===h&&0===this.state.chessBoard[e-15*h]&&4===t))return e-15*h}t=0;for(h=0;h<5;h++){i=14*(c=s-h),o=14*(c+1)-1;if(c>=0&&c<=13&&e-13*h>=i&&e-13*h<=o&&(4!==h&&1===this.state.chessBoard[e-13*h]&&t++,4===h&&0===this.state.chessBoard[e-13*h]&&4===t))return e-13*h}t=0;for(h=0;h<5;h++){var c;i=14*(c=s+h),o=14*(c+1)-1;if(c>=0&&c<=13&&e+13*h>=i&&e+13*h<=o&&(4!==h&&1===this.state.chessBoard[e+13*h]&&t++,4===h&&0===this.state.chessBoard[e+13*h]&&4===t))return e+13*h}t=0}return 200}},{key:"intervalChecking",value:function(t){for(var e=0,s=0;s<196;s++){var a=Math.floor(s/14),r=14*a,h=14*(a+1)-1;e=0;e=0;for(var i=0;i<5;i++)if(s+i<=h&&this.state.chessBoard[s+i]===t&&1!==i&&e++,1===i&&s+i<=h&&0===this.state.chessBoard[s+i]&&e++,5===e)return s+1;e=0;for(i=0;i<5;i++)if(s-i>=r&&this.state.chessBoard[s-i]===t&&1!==i&&e++,1===i&&s-i>=r&&0===this.state.chessBoard[s-i]&&e++,5===e)return s-1;e=0;for(i=0;i<5;i++)if(1!==i&&s+14*i<196&&this.state.chessBoard[s+14*i]===t&&e++,1===i&&s+14*i<196&&0===this.state.chessBoard[s+14*i]&&e++,5===e)return s+14;e=0;for(i=0;i<5;i++)if(1!==i&&s-14*i>=0&&this.state.chessBoard[s-14*i]===t&&e++,1===i&&s-14*i>=0&&0===this.state.chessBoard[s-14*i]&&e++,5===e)return s-14;e=0;for(i=0;i<5;i++){var o=14*(n=a+i),c=14*(n+1)-1;if(1!==i&&n>=0&&n<=13&&s+15*i<=c&&s+15*i>=o&&this.state.chessBoard[s+15*i]===t&&e++,1===i&&n>=0&&n<=13&&s+15*i<=c&&s+15*i>=o&&0===this.state.chessBoard[s+15*i]&&e++,5===e)return s+15}e=0;for(i=0;i<5;i++){o=14*(n=a-i),c=14*(n+1)-1;if(1!==i&&n>=0&&n<=13&&s-15*i<=c&&s-15*i>=o&&this.state.chessBoard[s-15*i]===t&&e++,1===i&&n>=0&&n<=13&&s-15*i<=c&&s-15*i>=o&&0===this.state.chessBoard[s-15*i]&&e++,5===e)return s-15}e=0;for(i=0;i<5;i++){o=14*(n=a+i),c=14*(n+1)-1;if(1!==i&&n>=0&&n<=13&&s+13*i<=c&&s+13*i>=o&&this.state.chessBoard[s+13*i]===t&&e++,1===i&&n>=0&&n<=13&&s+13*i<=c&&s+13*i>=o&&0===this.state.chessBoard[s+13*i]&&e++,5===e)return s+13}e=0;for(i=0;i<5;i++){var n;o=14*(n=a-i),c=14*(n+1)-1;if(1!==i&&n>=0&&n<=13&&s-13*i<=c&&s-13*i>=o&&this.state.chessBoard[s-13*i]===t&&e++,1===i&&n>=0&&n<=13&&s-13*i<=c&&s-13*i>=o&&0===this.state.chessBoard[s-13*i]&&e++,5===e)return s-13}e=0}return 200}},{key:"twoBlankOne",value:function(t){for(var e=0,s=0;s<196;s++){var a=Math.floor(s/14),r=14*a,h=14*(a+1)-1;e=0;for(var i=0;i<6;i++)if((0===i||3===i||5===i)&&s+i<=h&&0===this.state.chessBoard[s+i]&&e++,0!==i&&3!==i&&5!==i&&s+i<=h&&this.state.chessBoard[s+i]===t&&e++,6===e)return s+3;e=0;for(i=0;i<6;i++)if((0===i||3===i||5===i)&&s-i>=r&&0===this.state.chessBoard[s-i]&&e++,0!==i&&3!==i&&5!==i&&s-i>=r&&this.state.chessBoard[s-i]===t&&e++,6===e)return s-3;e=0;for(i=0;i<6;i++)if((0===i||3===i||5===i)&&s-14*i>=0&&0===this.state.chessBoard[s-14*i]&&e++,0!==i&&3!==i&&5!==i&&s-14*i>=0&&this.state.chessBoard[s-14*i]===t&&e++,6===e)return s-42;e=0;for(i=0;i<6;i++)if((0===i||3===i||5===i)&&s+14*i<196&&0===this.state.chessBoard[s+14*i]&&e++,0!==i&&3!==i&&5!==i&&s+14*i<196&&this.state.chessBoard[s+14*i]===t&&e++,6===e)return s+42;e=0;for(i=0;i<6;i++){var o=14*(n=a+i),c=14*(n+1)-1;if((0===i||3===i||5===i)&&s+15*i<=c&&s+15*i>=o&&0===this.state.chessBoard[s+15*i]&&e++,0!==i&&3!==i&&5!==i&&s+15*i<=c&&s+15*i>=o&&this.state.chessBoard[s+15*i]===t&&e++,6===e)return s+45}e=0;for(i=0;i<6;i++){o=14*(n=a-i),c=14*(n+1)-1;if((0===i||3===i||5===i)&&s-15*i<=c&&s-15*i>=o&&0===this.state.chessBoard[s-15*i]&&e++,0!==i&&3!==i&&5!==i&&s-15*i<=c&&s-15*i>=o&&this.state.chessBoard[s-15*i]===t&&e++,6===e)return s-45}e=0;for(i=0;i<6;i++){o=14*(n=a+i),c=14*(n+1)-1;if((0===i||3===i||5===i)&&s+13*i<=c&&s+13*i>=o&&0===this.state.chessBoard[s+13*i]&&e++,0!==i&&3!==i&&5!==i&&s+13*i<=c&&s+13*i>=o&&this.state.chessBoard[s+13*i]===t&&e++,6===e)return s+39}e=0;for(i=0;i<6;i++){var n;o=14*(n=a-i),c=14*(n+1)-1;if((0===i||3===i||5===i)&&s-13*i<=c&&s-13*i>=o&&0===this.state.chessBoard[s-13*i]&&e++,0!==i&&3!==i&&5!==i&&s-13*i<=c&&s-13*i>=o&&this.state.chessBoard[s-13*i]===t&&e++,6===e)return s-39}e=0}return console.log("false false"),200}},{key:"twoBlankTwo",value:function(t){for(var e=0,s=0;s<196;s++){var a=Math.floor(s/14),r=14*a,h=14*(a+1)-1;e=0;for(var i=0;i<5;i++)if(s+i<=h&&this.state.chessBoard[s+i]===t&&2!==i&&e++,2===i&&s+i<=h&&0===this.state.chessBoard[s+i]&&e++,5===e)return s+2;e=0;for(i=0;i<5;i++)if(s-i>=r&&this.state.chessBoard[s-i]===t&&2!==i&&e++,2===i&&s-i>=r&&0===this.state.chessBoard[s-i]&&e++,5===e)return s-2;e=0;for(i=0;i<5;i++)if(2!==i&&s+14*i<196&&this.state.chessBoard[s+14*i]===t&&e++,2===i&&s+14*i<196&&0===this.state.chessBoard[s+14*i]&&e++,5===e)return s+28;e=0;for(i=0;i<5;i++)if(2!==i&&s-14*i>=0&&this.state.chessBoard[s-14*i]===t&&e++,2===i&&s-14*i>=0&&0===this.state.chessBoard[s-14*i]&&e++,5===e)return s-28;e=0;for(i=0;i<5;i++){var o=14*(n=a+i),c=14*(n+1)-1;if(2!==i&&n>=0&&n<=13&&s+15*i<=c&&s+15*i>=o&&this.state.chessBoard[s+15*i]===t&&e++,2===i&&n>=0&&n<=13&&s+15*i<=c&&s+15*i>=o&&0===this.state.chessBoard[s+15*i]&&e++,5===e)return s+30}e=0;for(i=0;i<5;i++){o=14*(n=a-i),c=14*(n+1)-1;if(2!==i&&n>=0&&n<=13&&s-15*i<=c&&s-15*i>=o&&this.state.chessBoard[s-15*i]===t&&e++,2===i&&n>=0&&n<=13&&s-15*i<=c&&s-15*i>=o&&0===this.state.chessBoard[s-15*i]&&e++,5===e)return s-30}e=0;for(i=0;i<5;i++){o=14*(n=a+i),c=14*(n+1)-1;if(2!==i&&n>=0&&n<=13&&s+13*i<=c&&s+13*i>=o&&this.state.chessBoard[s+13*i]===t&&e++,2===i&&n>=0&&n<=13&&s+13*i<=c&&s+13*i>=o&&0===this.state.chessBoard[s+13*i]&&e++,5===e)return s+26}e=0;for(i=0;i<5;i++){var n;o=14*(n=a-i),c=14*(n+1)-1;if(2!==i&&n>=0&&n<=13&&s-13*i<=c&&s-13*i>=o&&this.state.chessBoard[s-13*i]===t&&e++,2===i&&n>=0&&n<=13&&s-13*i<=c&&s-13*i>=o&&0===this.state.chessBoard[s-13*i]&&e++,5===e)return s-26}e=0}return 200}},{key:"playerGeneralThree",value:function(){for(var t=0,e=0;e<196;e++){var s=Math.floor(e/14),a=14*s,r=14*(s+1)-1;t=0;for(var h=0;h<4;h++)if(3!==h&&e+h<=r&&1===this.state.chessBoard[e+h]&&t++,3===h&&e-1>=a&&e+h<=r&&0===this.state.chessBoard[e+h]&&2===this.state.chessBoard[e-1]&&3===t)return e+h;t=0;for(h=0;h<4;h++)if(3!==h&&e+h<=r&&1===this.state.chessBoard[e+h]&&t++,3===h&&e-1>=a&&e+h<=r&&2===this.state.chessBoard[e+h]&&0===this.state.chessBoard[e-1]&&3===t)return e-1;t=0;for(h=0;h<4;h++)if(3!==h&&e+14*h<196&&1===this.state.chessBoard[e+14*h]&&t++,3===h&&e-14>=0&&e+14*h<196&&0===this.state.chessBoard[e+14*h]&&2===this.state.chessBoard[e-14]&&3===t)return e+14*h;t=0;for(h=0;h<4;h++)if(3!==h&&e+14*h<196&&1===this.state.chessBoard[e+14*h]&&t++,3===h&&e-14>=0&&e+14*h<196&&2===this.state.chessBoard[e+14*h]&&0===this.state.chessBoard[e-14]&&3===t)return e-14;t=0;for(h=0;h<4;h++){var i=14*(c=s+h),o=14*(c+1)-1;if(c>=0&&c<=13&&e+15*h>=i&&e+15*h<=o&&(3!==h&&1===this.state.chessBoard[e+15*h]&&t++,3===h&&2===this.state.chessBoard[e+15*h]&&0===this.state.chessBoard[e-15]&&e-15<=14*c-1&&e-15>=14*(s-1)&&3===t))return e-15}t=0;for(h=0;h<4;h++){i=14*(c=s+h),o=14*(c+1)-1;if(c>=0&&c<=13&&e+15*h>=i&&e+15*h<=o&&(3!==h&&1===this.state.chessBoard[e+15*h]&&t++,3===h&&0===this.state.chessBoard[e+15*h]&&2===this.state.chessBoard[e-15]&&e-15<=14*c-1&&e-15>=14*(s-1)&&3===t))return e+15*h}t=0;for(h=0;h<4;h++){i=14*(c=s+h),o=14*(c+1)-1;if(c>=0&&c<=13&&e+13*h>=i&&e+13*h<=o&&(3!==h&&1===this.state.chessBoard[e+13*h]&&t++,3===h&&2===this.state.chessBoard[e+13*h]&&0===this.state.chessBoard[e-13]&&e-13<=14*s-1&&e-13>=14*(s-1)&&3===t))return e-13}t=0;for(h=0;h<4;h++){var c;i=14*(c=s+h),o=14*(c+1)-1;if(c>=0&&c<=13&&e+13*h>=i&&e+13*h<=o&&(3!==h&&1===this.state.chessBoard[e+13*h]&&t++,3===h&&0===this.state.chessBoard[e+13*h]&&2===this.state.chessBoard[e-13]&&e-13<=14*s-1&&e-13>=14*(s-1)&&3===t))return e+13*h}t=0}return 200}},{key:"generalLogic",value:function(t){var e,s,a,r=t%14,h=Math.floor(t/14),i=0;do{if(1e3===++i){do{a=Math.floor(196*Math.random())}while(0!==this.state.chessBoard[a]);console.log("Break");break}e=(a=Math.floor(196*Math.random()))%14,s=Math.floor(a/14)}while(0!==this.state.chessBoard[a]||Math.abs(e-r)>=2||Math.abs(s-h)>=2);return console.log("x difference ",e-r),console.log("y difference ",s-h),console.log("Result",a),a}},{key:"machineResponse",value:function(t,e,s){var a=[],r=[];if(this.state.FirstTime){for(var h=!1,i=0;i<this.props.boundary.length;i++)s===this.props.boundary[i]&&(h=!0);if(0===(o=Math.floor(2*Math.random()))){for(i=0;i<t.length;i++)a[i]=t[i];for(i=0;i<t.length;i++)r[i]=e[i];return void(h?(a[s-1]=2,r[s-1]=!0,this.setState({player:1,chessBoard:a,newGame:!1,click:r,FirstTime:!1,machineFirst:s-1})):(a[s+1]=2,r[s+1]=!0,this.setState({player:1,chessBoard:a,newGame:!1,click:r,FirstTime:!1,machineFirst:s+1})))}if(1===o){for(i=0;i<t.length;i++)a[i]=t[i];for(i=0;i<t.length;i++)r[i]=e[i];return void(h?(a[s-15]=2,r[s-15]=!0,this.setState({player:1,chessBoard:a,newGame:!1,click:r,FirstTime:!1,machineFirst:s-15})):(a[s+15]=2,r[s+15]=!0,this.setState({player:1,chessBoard:a,newGame:!1,click:r,FirstTime:!1,machineFirst:s+15})))}}for(i=0;i<t.length;i++)a[i]=t[i];for(i=0;i<t.length;i++)r[i]=e[i];if(!this.checkWinner()){var o,c=this.checkMachineLeading(),n=this.playerHasThreeConnect(),d=this.playerHasFour(),f=this.machineHasThreeConnect(),l=this.playerGeneralThree(),B=this.intervalChecking(1),u=this.intervalChecking(2),v=this.twoBlankTwo(2),p=this.twoBlankTwo(1),k=this.twoBlankOne(1),m=this.twoBlankOne(2);do{o=Math.floor(24*Math.random())}while(0!==this.state.chessBoard[o]);o=this.generalLogic(s),200!==l&&(o=l),200!==n&&(o=n),200!==k&&(o=k),200!==f&&(o=f),200!==m&&(o=m),200!==d&&(o=d),200!==B&&(o=B),200!==p&&(o=p),200!==u&&(o=u),200!==v&&(o=v),200!==c&&(o=c),a[o]=2,r[o]=!0,this.setState({player:1,chessBoard:a,newGame:!1,click:r,FirstTime:!1})}}},{key:"checkWinner",value:function(){for(var t=0;t<196;t++){var e=Math.floor(t/14),s=14*e,a=14*(e+1)-1,r=0;if(0!==this.state.chessBoard[t]){for(var h=1;h<5;h++)if(t+h<a&&(this.state.chessBoard[t]===this.state.chessBoard[t+h]&&r++,4===r))return!0;r=0;for(h=1;h<5;h++)if(t-h>s&&(this.state.chessBoard[t]===this.state.chessBoard[t-h]&&r++,4===r))return!0;r=0;for(h=1;h<5;h++)if(t+14*h<196&&(this.state.chessBoard[t]===this.state.chessBoard[t+14*h]&&r++,4===r))return!0;r=0;for(h=1;h<5;h++)if(t-14*h>0&&(this.state.chessBoard[t]===this.state.chessBoard[t-14*h]&&r++,4===r))return!0;r=0;for(h=1;h<5;h++){var i=14*(c=e+h),o=14*(c+1)-1;if(c>=0&&c<=13&&t+15*h>=i&&t+15*h<=o&&(this.state.chessBoard[t]===this.state.chessBoard[t+15*h]&&r++,4===r))return!0}r=0;for(h=1;h<5;h++){var c;i=14*(c=e+h),o=14*(c+1)-1;if(c>=0&&c<=13&&t+13*h>=i&&t+13*h<=o&&(this.state.chessBoard[t]===this.state.chessBoard[t+13*h]&&r++,4===r))return!0}}}return!1}},{key:"reset",value:function(){for(var t=[],e=[],s=[],a=[],r=0;r<196;r++)s.push(0),e.push(r),a.push(0),t.push(!1);this.setState({newGame:!0,player:1,chess:e,gameState:s,chessBoard:a,click:t,FirstTime:!0})}},{key:"render",value:function(){var t=this,e="",s="",a=this.checkWinner();a&&(2===this.state.player&&(s="Player1 Win !!"),1===this.state.player&&(s="Player2 Win !!")),a||(e=r.a.createElement("h1",{style:{textAlign:"center"}},"Player ",this.state.player));var h=this.state.chess.map(function(e){return r.a.createElement(v,{key:e,position:e,clickChess:t.clickChess,player:t.state.player,haveClicked:t.state.click[e],newGame:t.state.newGame,finish:a,machineResponse:t.machineResponse,firstTime:t.state.FirstTime,playerColor:t.state.chessBoard[e]})});return r.a.createElement("div",null,e,r.a.createElement("h1",{style:{textAlign:"center"}},s),r.a.createElement("div",{id:"allChess"},h),r.a.createElement("button",{onClick:this.reset},"Play Again!"),r.a.createElement("p",{style:{textAlign:"center"}},"JunBin Create"))}}]),e}(a.Component));p.defaultProps={boundary:[13,27,41,55,69,83,97,111,125,139,153,167,181,195],boundary2:[0,14,28,42,56,70,84,98,112,126,140,154,168,182]};var k=p;var m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.ffd30418.chunk.js.map