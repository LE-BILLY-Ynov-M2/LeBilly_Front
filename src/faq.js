import React, { useEffect } from "react"

const Faq = () => {
    useEffect(() => {
        window.$crisp = []
        window.CRISP_WEBSITE_ID = "e5f26066-f513-42e9-b335-efd059c1ce8e"

        const script = document.createElement("script")
        // script.type = "text/javascript"
        // script.src = "https://client.crisp.chat/l.js"
        // document.body.appendChild(script)
        // script.id = "ze-snippet"
        // script.src =
        // "https://static.zdassets.com/ekr/snippet.js?key=22ee25a3-bee1-41c5-9cc7-4fb6ead5549b"
        // script.async = true

        script.src = "https://client.crisp.chat/l.js"
        script.async = true

        document.body.appendChild(script)

        //
        // script.type="text/javascript"
        // <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="e5f26066-f513-42e9-b335-efd059c1ce8e";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
        // console.log(script)
    }, [])

    return (
        <div>
            <p>pppppppppp</p>
            {/* <script
                id="ze-snippet"
                src="https://static.zdassets.com/ekr/snippet.js?key=22ee25a3-bee1-41c5-9cc7-4fb6ead5549b"
            >
                {" "}
            </script> */}
        </div>
    )
}

export default Faq
