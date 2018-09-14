$(document).ready(() => {
    $(".preview > img").hover((e) => {
        //
    });

    $("[data-tooltip]").mouseover(function (e) {
        const id = Math.random().toString().replace(".", "");

        const text = $(this).attr("data-tooltip");
        const scroll = $(document).scrollTop();

        $(this).attr("data-bound", id.toString());
        $(".tooltips").append(`<div data-bound-owner="${id}" style="left: ${e.clientX}px; top: ${e.clientY + scroll}px;" class='tooltip'>${text}</div>`);

        $(this).mouseout(function () {
            const id = $(this).attr("data-bound");

            $(`div[data-bound-owner=${id}]`).remove();
        });
    });

    $(document).scroll(() => {
        const nav = $("nav.nav");
        const scroll = $(document).scrollTop();

        if (scroll > 100 && !nav.hasClass("bg")) {
            nav.addClass("bg");
        }
        else if (scroll === 0) {
            nav.removeClass("bg");
        }
    });

    $("#back-to-top").click(() => {
        $("html, body").animate({
            scrollTop: 0
        }, 750);
    });

    $(".logo").click(() => {
        window.open("https://discordapp.com/oauth2/authorize?client_id=446736307172016138&scope=bot&permission=8", "_blank");
    });

    $("#support").click(() => {
        window.open("https://discord.gg/EKbRzwf", "_blank");
    });

    $(document).keydown((e) => {
        if (e.key === "f" && e.ctrlKey) {
            e.preventDefault();
            $("input.search").focus();
        }
    });
});
