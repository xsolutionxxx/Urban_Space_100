import Message from "../ui/Message"

import error from "@assets/error.png"

const ErrorMessage = () => {
    return (
        <div className="h-screen flex-1 flex flex-col justify-center items-center gap-6">
            <Message src={error} title="Щось пішло не так..." text="Спробуйте ще раз або зверніться до адміністратора." />

            <a href="/"
                className="px-5.5 py-2.5 block bg-accent text-sm text-white/90 uppercase shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            >
                Повернутися на головну
            </a>
        </div>
    )
}

export default ErrorMessage;