// Google Tag Manager
(function(w,d,s,l,i){
    w[l]=w[l]||[];w[l].push({ 'gtm.start':new Date().getTime(), event:'gtm.js' });
    var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),
        dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NFDXJK8');

// Google Tag Manager - no script

var noscript_elm = $("<noscript></noscript>");
var iframe_elm =
    $("<iframe></iframe>",{
        src   :"https://www.googletagmanager.com/ns.html?id=GTM-NFDXJK8",
        height:"0",
        width :"0",
        style :"display:none;visibility:hidden" });
$("body").prepend( $(noscript_elm).append(iframe_elm) );


$("body").prepend( "<div>HOGEHOGE</div>" );

