import info from "@assets/info.png"

function Message({ src, title, text }) {
    return (
        <div className="flex flex-col justify-center items-center gap-10 text-center">
            <img src={src ? src : info} alt="paper plane" className="w-[250px]" />
            <div className="max-w-[450px] flex flex-col gap-3">
                <h2 className="font-bold text-xl">{title}</h2>
                <p className="text-base">{text}</p>
            </div>
        </div>
    )
}

export default Message;