import { useEffect } from "react";

const FacebookMessengerChat = ({ pageId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "${pageId}");
      chatbox.setAttribute("attribution", "biz_inbox");

      window.fbAsyncInit = function() {
        FB.init({
          xfbml: true,
          version: 'v17.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    `;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [pageId]);

  return (
    <>
      <div id="fb-root"></div>
      <div
        id="fb-customer-chat"
        className="fb-customerchat"
        dangerouslySetInnerHTML={{
          __html: `
            <div id="fb-root"></div>
            <div class="fb-customerchat"
              attribution="biz_inbox"
              page_id=${pageId}
            ></div>
          `,
        }}
      ></div>
    </>
  );
};

export default FacebookMessengerChat;
