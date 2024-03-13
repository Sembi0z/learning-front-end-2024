var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standart;
var membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "Vkontakte";
    SocialMedia["FACEBOOK"] = "Facebook";
    SocialMedia["TELEGRAM"] = "Telega";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.TELEGRAM;
console.log(social);
