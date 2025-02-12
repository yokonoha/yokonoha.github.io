//////////////////////////////////////
////    Dislike Archive Script    ////
////     Prevent displaying       ////
////           Beta!              ////
//////////////////////////////////////

// The author is not responsible for this script. Use at your own risk.
//Please Copy&Paste when you want to implement this script to your works!
//  <script src="./das.js"></script>

//Variable
let protectionlevel=1;//Default value is 1 Range 1~2 (2 is the highest.)

if (protectionlevel=1)
{
if (navigator.userAgent.includes("ia_archiver"))
{
    console.log("[das] Suspicious UA detected. Trying to protect content by hiding...");
    document.body.style.display="none";
}

}
else
{
    if (navigator.userAgent.includes("archive"))
        {
            console.log("[das] Suspicious UA detected. Trying to protect content by hiding...");
            document.body.style.display="none";
            
        }
        else if(navigator.userAgent.includes("ia"))
        {
            console.log("[das lev2] Suspicious UA detected. Trying to protect content by hiding...");
            document.body.style.display="none";
        }
}
