import { useEffect } from "react";

function Alert(props) {
    const { name = "", closeAlert = Function.prototype } = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
        // aslint-disable-next-line
    }, [name]);

    return (
        <div id="toast-container">
            <div className="toast">{name} положили к тебе честно правда</div>
        </div>
    );
}
export { Alert };