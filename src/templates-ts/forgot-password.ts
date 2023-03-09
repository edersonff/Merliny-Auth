import { frontendurl } from "../back/config";
import generateToken from "../back/utils/generateToken";

export default (user: any) => {
  const token = generateToken(user);
  const url = `${frontendurl}/reset?resetToken=${token}`;
  const html = `
        <!doctype html><html ⚡4email data-css-strict><head><meta charset="utf-8"><style amp4email-boilerplate>body{visibility:hidden}</style><script async src="https://cdn.ampproject.org/v0.js"></script><style amp-custom>.es-desk-hidden {	display:none;	float:left;	overflow:hidden;	width:0;	max-height:0;	line-height:0;}.es-button-border:hover a.es-button, .es-button-border:hover button.es-button {	background:#58DFEC;	border-color:#58DFEC;}.es-button-border:hover {	border-color:#26C6DA #26C6DA #26C6DA #26C6DA;	background:#58DFEC;	border-style:solid solid solid solid;}td .es-button-border:hover a.es-button-2 {	background:#5936A2;	border-color:#5936A2;}td .es-button-border-3:hover {	background:#5936A2;}body {	width:100%;	font-family:arial, "helvetica neue", helvetica, sans-serif;}table {	border-collapse:collapse;	border-spacing:0px;}table td, body, .es-wrapper {	padding:0;	Margin:0;}.es-content, .es-header, .es-footer {	table-layout:fixed;	width:100%;}p, hr {	Margin:0;}h1, h2, h3, h4, h5 {	Margin:0;	line-height:120%;	font-family:Orbitron, sans-serif;}.es-left {	float:left;}.es-right {	float:right;}.es-p5 {	padding:5px;}.es-p5t {	padding-top:5px;}.es-p5b {	padding-bottom:5px;}.es-p5l {	padding-left:5px;}.es-p5r {	padding-right:5px;}.es-p10 {	padding:10px;}.es-p10t {	padding-top:10px;}.es-p10b {	padding-bottom:10px;}.es-p10l {	padding-left:10px;}.es-p10r {	padding-right:10px;}.es-p15 {	padding:15px;}.es-p15t {	padding-top:15px;}.es-p15b {	padding-bottom:15px;}.es-p15l {	padding-left:15px;}.es-p15r {	padding-right:15px;}.es-p20 {	padding:20px;}.es-p20t {	padding-top:20px;}.es-p20b {	padding-bottom:20px;}.es-p20l {	padding-left:20px;}.es-p20r {	padding-right:20px;}.es-p25 {	padding:25px;}.es-p25t {	padding-top:25px;}.es-p25b {	padding-bottom:25px;}.es-p25l {	padding-left:25px;}.es-p25r {	padding-right:25px;}.es-p30 {	padding:30px;}.es-p30t {	padding-top:30px;}.es-p30b {	padding-bottom:30px;}.es-p30l {	padding-left:30px;}.es-p30r {	padding-right:30px;}.es-p35 {	padding:35px;}.es-p35t {	padding-top:35px;}.es-p35b {	padding-bottom:35px;}.es-p35l {	padding-left:35px;}.es-p35r {	padding-right:35px;}.es-p40 {	padding:40px;}.es-p40t {	padding-top:40px;}.es-p40b {	padding-bottom:40px;}.es-p40l {	padding-left:40px;}.es-p40r {	padding-right:40px;}.es-menu td {	border:0;}s {	text-decoration:line-through;}p, ul li, ol li {	font-family:arial, "helvetica neue", helvetica, sans-serif;	line-height:150%;}ul li, ol li {	Margin-bottom:15px;	margin-left:0;}a {	text-decoration:underline;}.es-menu td a {	text-decoration:none;	display:block;	font-family:arial, "helvetica neue", helvetica, sans-serif;}.es-menu amp-img, .es-button amp-img {	vertical-align:middle;}.es-wrapper {	width:100%;	height:100%;}.es-wrapper-color, .es-wrapper {	background-color:#07023C;}.es-header {	background-color:transparent;}.es-header-body {	background-color:#FFFFFF;}.es-header-body p, .es-header-body ul li, .es-header-body ol li {	color:#333333;	font-size:14px;}.es-header-body a {	color:#26C6DA;	font-size:14px;}.es-content-body {	background-color:#FFFFFF;}.es-content-body p, .es-content-body ul li, .es-content-body ol li {	color:#333333;	font-size:14px;}.es-content-body a {	color:#26C6DA;	font-size:14px;}.es-footer {	background-color:transparent;}.es-footer-body {	background-color:#FFFFFF;}.es-footer-body p, .es-footer-body ul li, .es-footer-body ol li {	color:#333333;	font-size:14px;}.es-footer-body a {	color:#FFFFFF;	font-size:14px;}.es-infoblock, .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li {	line-height:120%;	font-size:12px;	color:#CCCCCC;}.es-infoblock a {	font-size:12px;	color:#CCCCCC;}h1 {	font-size:44px;	font-style:normal;	font-weight:bold;	color:#10054D;}h2 {	font-size:36px;	font-style:normal;	font-weight:bold;	color:#10054D;}h3 {	font-size:28px;	font-style:normal;	font-weight:bold;	color:#10054D;}.es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a {	font-size:44px;}.es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a {	font-size:36px;}.es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a {	font-size:28px;}a.es-button, button.es-button {	border-style:solid;	border-color:#26C6DA;	border-width:10px 25px 10px 30px;	display:inline-block;	background:#26C6DA;	border-radius:10px;	font-size:20px;	font-family:arial, "helvetica neue", helvetica, sans-serif;	font-weight:normal;	font-style:normal;	line-height:120%;	color:#FFFFFF;	text-decoration:none;	width:auto;	text-align:center;}.es-button-border {	border-style:solid solid solid solid;	border-color:#26C6DA #26C6DA #26C6DA #26C6DA;	background:#26C6DA;	border-width:4px 4px 4px 4px;	display:inline-block;	border-radius:10px;	width:auto;}body {	font-family:arial, "helvetica neue", helvetica, sans-serif;}@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150% } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:30px; text-align:center } h2 { font-size:24px; text-align:left } h3 { font-size:20px; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px; text-align:center } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px; text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px; text-align:left } .es-menu td a { font-size:14px } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px } *[class="gmail-fix"] { display:none } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left } .es-m-txt-r amp-img { float:right } .es-m-txt-c amp-img { margin:0 auto } .es-m-txt-l amp-img { float:left } .es-button-border { display:inline-block } a.es-button, button.es-button { font-size:18px; display:inline-block } .es-adaptive table, .es-left, .es-right { width:100% } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%; max-width:600px } .es-adapt-td { display:block; width:100% } .adapt-img { width:100%; height:auto } td.es-m-p0 { padding:0px } td.es-m-p0r { padding-right:0px } td.es-m-p0l { padding-left:0px } td.es-m-p0t { padding-top:0px } td.es-m-p0b { padding-bottom:0 } td.es-m-p20b { padding-bottom:20px } .es-mobile-hidden, .es-hidden { display:none } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto; overflow:visible; float:none; max-height:inherit; line-height:inherit } tr.es-desk-hidden { display:table-row } table.es-desk-hidden { display:table } td.es-desk-menu-hidden { display:table-cell } .es-menu td { width:1% } table.es-table-not-adapt, .esd-block-html table { width:auto } table.es-social { display:inline-block } table.es-social td { display:inline-block } .es-desk-hidden { display:table-row; width:auto; overflow:visible; max-height:inherit } }</style></head>
        <body><div class="es-wrapper-color"> <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#07023c"></v:fill> </v:background><![endif]--><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tr><td valign="top"><table class="es-content" cellspacing="0" cellpadding="0" align="center"><tr><td align="center"><table class="es-content-body" style="background-color: #010101" width="600" cellspacing="0" cellpadding="0" bgcolor="#010101" align="center"><tr><td class="es-p20t es-p10b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tr><td width="560" class="es-m-p0r" valign="top" align="center"><table cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td align="center" style="font-size: 0px"><a target="_blank" href="${frontendurl}"><amp-img src="${frontendurl}/logo.webp" alt="Logo" style="display: block" title="Logo" height="85" width="95"></amp-img></a></td>
        </tr></table></td></tr></table></td></tr><tr><td class="es-p30t es-p30b es-p20r es-p20l" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tr><td class="es-m-p0r es-m-p20b" width="560" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0" role="presentation"><tr><td align="center"><h1 style="color: #7f62a5">&nbsp;Recemos um pedido para resetar sua&nbsp;senha</h1></td></tr><tr><td align="center" class="es-p15t es-p10b" style="font-size: 0px"><a target="_blank" href="https://viewstripo.email"><amp-img class="adapt-img" src="https://zdtupd.stripocdn.email/content/guids/CABINET_dee64413d6f071746857ca8c0f13d696/images/852converted_1x3.webp" alt style="display: block" height="300" width="276" layout="responsive"></amp-img></a></td></tr><tr><td align="center" class="es-p10t es-p10b"><p style="color: #e4d6d5">&nbsp;Esqueceu sua senha? Não tem problema - acontece com todo mundo!</p></td>
        </tr><tr><td align="center" class="es-p15t es-p15b"> <!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" style="height:44px; v-text-anchor:middle; width:255px" arcsize="23%" strokecolor="#26c6da" strokeweight="4px" fillcolor="#6227dd"> <w:anchorlock></w:anchorlock> <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:18px; font-weight:400; line-height:18px; mso-text-raise:1px'>Resete Sua Senha</center> </v:roundrect></a><![endif]--> <!--[if !mso]><!-- --><span class="msohide es-button-border es-button-border-3" style="background: #6227dd"><a href="${url}" class="es-button es-button-2" target="_blank" style="font-weight: normal;background: #6227dd;border-color: #6227dd"> Resete Sua Senha</a></span> <!--<![endif]--></td>
        </tr><tr><td align="center" class="es-p10t es-p10b"><p style="color: #ffffff">Se você ignorar esta mensagem, sua senha não será alterada.</p></td></tr></table></td></tr></table></td></tr></table></td>
        </tr></table><table cellpadding="0" cellspacing="0" class="es-content" align="center"><tr><td align="center"><table bgcolor="#10054D" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #10054d"><tr><td class="es-p35t es-p35b es-p20r es-p20l" align="left" style="background-image: url(https://zdtupd.stripocdn.email/content/guids/CABINET_0e8fbb6adcc56c06fbd3358455fdeb41/images/vector_sSY.webp);background-repeat: no-repeat;background-position: left center"> <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="69" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tr><td width="69" class="es-m-p20b" align="left"><table cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td align="center" class="es-m-txt-l" style="font-size: 0px"><a target="_blank" href="https://viewstripo.email"><amp-img src="https://zdtupd.stripocdn.email/content/guids/CABINET_dee64413d6f071746857ca8c0f13d696/images/group_118_lFL.webp" alt style="display: block" width="69" height="88"></amp-img></a></td>
        </tr></table></td></tr></table> <!--[if mso]></td><td width="20"></td><td width="471" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-right" align="right"><tr><td width="471" align="left"><table cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td align="left"><h3 style="color: #ffffff"><b>Real people. Here to help.</b></h3></td></tr><tr><td align="left" class="es-p10t es-p5b"><p style="color: #ffffff">Have a question? Give us a call at&nbsp;<strong><a href="tel:(000)1234567899" target="_blank">(000) 1234 5678 99</a></strong>&nbsp;to chat with a Customer Success representative.</p></td></tr></table></td></tr></table> <!--[if mso]></td></tr></table><![endif]--></td></tr></table></td>
        </tr></table><table cellpadding="0" cellspacing="0" class="es-footer" align="center"><tr><td align="center"><table bgcolor="#131212" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #131212"><tr><td class="es-p30t es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tr><td width="560" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td align="center"><h2 style="color: #f5f5f6">Is this newsletter helpful?</h2></td></tr></table></td></tr></table></td>
        </tr><tr><td class="es-p30t es-p20b es-p20r es-p20l esdev-adapt-off" align="left"><table width="560" cellpadding="0" cellspacing="0" class="esdev-mso-table"><tr><td class="esdev-mso-td" valign="top"><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tr class="es-mobile-hidden"><td width="63" align="left"><table cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td align="center" height="40"></td></tr></table></td></tr></table></td><td width="20"></td>
        <td class="esdev-mso-td" valign="top"><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tr><td width="63" align="left"><table cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td align="center"> <!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" style="height:29px; v-text-anchor:middle; width:47px" arcsize="34%" strokecolor="#26c6da" strokeweight="4px" fillcolor="#26c6da"> <w:anchorlock></w:anchorlock> <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:10px; font-weight:400; line-height:10px; mso-text-raise:1px'>1</center> </v:roundrect></a><![endif]--> <!--[if !mso]><!-- --><span class="es-button-border msohide"><a href="https://viewstripo.email" class="es-button es-button-1" target="_blank" style="font-size: 16px;border-width: 5px 15px">1</a></span> <!--<![endif]--></td>
        </tr></table></td></tr></table></td><td width="20"></td>
        <td class="esdev-mso-td" valign="top"><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tr><td width="63" align="left"><table cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td align="center"> <!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" style="height:29px; v-text-anchor:middle; width:47px" arcsize="34%" strokecolor="#26c6da" strokeweight="4px" fillcolor="#26c6da"> <w:anchorlock></w:anchorlock> <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:10px; font-weight:400; line-height:10px; mso-text-raise:1px'>2</center> </v:roundrect></a><![endif]--> <!--[if !mso]><!-- --><span class="es-button-border msohide"><a href="https://viewstripo.email" class="es-button es-button-1" target="_blank" style="border-width: 5px 15px;font-size: 16px">2</a></span> <!--<![endif]--></td>
        </tr></table></td></tr></table></td><td width="20"></td>
        <td class="esdev-mso-td" valign="top"><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tr><td width="63" align="left"><table cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td align="center"> <!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" style="height:29px; v-text-anchor:middle; width:47px" arcsize="34%" strokecolor="#26c6da" strokeweight="4px" fillcolor="#26c6da"> <w:anchorlock></w:anchorlock> <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:10px; font-weight:400; line-height:10px; mso-text-raise:1px'>3</center> </v:roundrect></a><![endif]--> <!--[if !mso]><!-- --><span class="es-button-border msohide"><a href="https://viewstripo.email" class="es-button es-button-1" target="_blank" style="border-width: 5px 15px;font-size: 16px">3</a></span> <!--<![endif]--></td>
        </tr></table></td></tr></table></td><td width="20"></td>
        <td class="esdev-mso-td" valign="top"><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tr><td width="63" align="left"><table cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td align="center"> <!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" style="height:29px; v-text-anchor:middle; width:47px" arcsize="34%" strokecolor="#26c6da" strokeweight="4px" fillcolor="#26c6da"> <w:anchorlock></w:anchorlock> <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:10px; font-weight:400; line-height:10px; mso-text-raise:1px'>4</center> </v:roundrect></a><![endif]--> <!--[if !mso]><!-- --><span class="es-button-border msohide"><a href="https://viewstripo.email" class="es-button es-button-1" target="_blank" style="border-width: 5px 15px;font-size: 16px">4</a></span> <!--<![endif]--></td>
        </tr></table></td></tr></table></td><td width="20"></td>
        <td class="esdev-mso-td" valign="top"><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tr><td width="63" align="left"><table cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td align="center"> <!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" style="height:29px; v-text-anchor:middle; width:47px" arcsize="34%" strokecolor="#26c6da" strokeweight="4px" fillcolor="#26c6da"> <w:anchorlock></w:anchorlock> <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:10px; font-weight:400; line-height:10px; mso-text-raise:1px'>5</center> </v:roundrect></a><![endif]--> <!--[if !mso]><!-- --><span class="es-button-border msohide"><a href="https://viewstripo.email" class="es-button es-button-1" target="_blank" style="border-width: 5px 15px;font-size: 16px">5</a></span> <!--<![endif]--></td>
        </tr></table></td></tr></table></td><td width="20"></td><td class="esdev-mso-td" valign="top"><table cellpadding="0" cellspacing="0" class="es-right" align="right"><tr class="es-mobile-hidden"><td width="62" align="left"><table cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td align="center" height="40"></td></tr></table></td></tr></table></td></tr></table></td></tr><tr><td class="es-p10t es-p30b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tr><td width="560" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td align="center"><p>1 —&nbsp;Not at all&nbsp;helpful&nbsp;😟<br>5&nbsp;—&nbsp;Extremely&nbsp;helpful&nbsp;😊</p></td></tr></table></td></tr></table></td></tr></table></td>
        </tr></table><table cellpadding="0" cellspacing="0" class="es-footer" align="center"><tr><td align="center"><table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent"><tr><td class="es-p20t es-p20b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tr><td width="560" align="left"><table cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td><table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation"><tr class="links"><td align="center" valign="top" width="25%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-bottom: 10px"><a target="_blank" href="https://viewstripo.email" style="color: #ffffff">About us</a></td>
        <td align="center" valign="top" width="25%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-bottom: 10px"><a target="_blank" href="https://viewstripo.email" style="color: #ffffff">News</a></td><td align="center" valign="top" width="25%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-bottom: 10px"><a target="_blank" href="https://viewstripo.email" style="color: #ffffff">Career</a></td><td align="center" valign="top" width="25%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-bottom: 10px"><a target="_blank" href="https://viewstripo.email" style="color: #ffffff">The shops</a></td></tr></table></td>
        </tr><tr><td align="center" class="es-p10t es-p10b" style="font-size:0"><table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation"><tr><td align="center" valign="top" class="es-p20r"><a target="_blank" href="https://viewstripo.email"><amp-img title="Facebook" src="https://zdtupd.stripocdn.email/content/assets/img/social-icons/square-colored/facebook-square-colored.webp" alt="Fb" width="32" height="32"></amp-img></a></td><td align="center" valign="top" class="es-p20r"><a target="_blank" href="https://viewstripo.email"><amp-img title="Twitter" src="https://zdtupd.stripocdn.email/content/assets/img/social-icons/square-colored/twitter-square-colored.webp" alt="Tw" width="32" height="32"></amp-img></a></td>
        <td align="center" valign="top" class="es-p20r"><a target="_blank" href="https://viewstripo.email"><amp-img title="Instagram" src="https://zdtupd.stripocdn.email/content/assets/img/social-icons/square-colored/instagram-square-colored.webp" alt="Inst" width="32" height="32"></amp-img></a></td><td align="center" valign="top"><a target="_blank" href="https://viewstripo.email"><amp-img title="Youtube" src="https://zdtupd.stripocdn.email/content/assets/img/social-icons/square-colored/youtube-square-colored.webp" alt="Yt" width="32" height="32"></amp-img></a></td></tr></table></td>
        </tr><tr><td align="center" class="es-p10t es-p10b"><p style="font-size: 12px;color: #ffffff">You are receiving this email because you have visited our site or asked us about the regular newsletter. Make sure our messages get to your Inbox (and not your bulk or junk folders).<br><a target="_blank" style="font-size: 12px;text-decoration: underline" href="https://viewstripo.email">Privacy police</a> | <a target="_blank" style="font-size: 12px;text-decoration: underline">Unsubscribe</a></p></td></tr></table></td></tr></table></td>
        </tr><tr><td class="es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tr><td width="560" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td align="center" class="es-infoblock made_with" style="font-size:0"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=product_update_1&utm_content=it_happens_to_everyone"><amp-img src="https://zdtupd.stripocdn.email/content/guids/CABINET_09023af45624943febfa123c229a060b/images/7911561025989373.webp" alt width="125" style="display: block" height="56"></amp-img></a></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table></div></body></html>
    `;
  return html;
};
