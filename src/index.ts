/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
var zoneOfficeName = "popupOfficeZone";
var zoneEventName = "popupEventZone";
var zoneSchoolName = "popupSchoolZone";
var zoneTCMName = "popupTCMZone";

var urlPricing = "https://workadventu.re/pricing";
var urlSchoolOffer = "https://workadventu.re/school-offer";
var urlEvent = "https://workadventu.re/events";
var urlGettingStarted = "https://workadventu.re/getting-started";

var currentPopup : any = undefined;

WA.onEnterZone(zoneOfficeName, () => {
    currentPopup =  WA.openPopup("popUpOffice","Create your own virtual office in WorkAdventure, it's easy !",[
        {
            label: "See the pricing",
            className: "normal",
            callback: (popup => {
                WA.openTab(urlPricing);
            })
        },
        {
            label : "Getting Started",
            className :"normal",
            callback : (popup => {
                WA.openTab(urlGettingStarted);
            })

        }]);
})

WA.onEnterZone(zoneEventName, () => {
    currentPopup =  WA.openPopup("popUpEvent","You can create your own Event in WorkAdventure",[
        {
            label: "See the event page",
            className: "normal",
            callback: (popup => {
                WA.openTab(urlEvent);
            })
        }]);
})

WA.onEnterZone(zoneTCMName, () => {
    currentPopup =  WA.openPopup("popUpTCM","Come meet the WorkAdventure team in our office ! " +
        " We are open from 9 am to 7pm CEST.",[]);
})


WA.onEnterZone(zoneSchoolName, () => {
    currentPopup =  WA.openPopup("popUpSchool","WorkAdventure is free for teachers a the moment ! Take advantage of our offer ",[
        {
            label: "See the offer",
            className: "normal",
            callback: (popup => {
                WA.openTab(urlSchoolOffer);
            })
        }]);
})

WA.onLeaveZone(zoneSchoolName, closePopUp)

WA.onLeaveZone(zoneTCMName, closePopUp)

WA.onLeaveZone(zoneEventName, closePopUp)

WA.onLeaveZone(zoneOfficeName, closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
