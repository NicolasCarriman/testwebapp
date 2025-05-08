import { useEffect, useState } from "react";
import type { IAlert } from "~/model/alert";

export const useAlert = (duration: number) => {
    const [alerts, setAlerts] = useState<Array<IAlert>>([]);
    const [time, setTime] = useState<NodeJS.Timeout | null>(null)
    if (!duration) throw new Error('duration parameter must be specified')

    const reset = (callback?: () => void) => setTime(
        setTimeout(() => {
            setAlerts(alerts => alerts.slice(1));
            callback && callback();
        }, duration))

    const hideMessage = (alertId: number) => {
        setAlerts(alerts => alerts.filter(alert => alert.id !== alertId))
        time && clearTimeout(time);
    };

    const addAlert = (type: IAlert['type'], message: IAlert['message']) => {
        const currentAlert = { type, message, id: alerts.length + 1 };
        const updatedAlerts = alerts.filter(alert => alert.id !== currentAlert.id).concat(currentAlert);
        setAlerts(updatedAlerts);
    };

    const showMessage = (type: IAlert['type'], message: IAlert['message'], callback?: () => void) => {
        addAlert(type, message);
        reset(callback);
    }

    useEffect(() => {
        return () => {
            time && clearTimeout(time)
        };
    }, []);

    return {
        alerts,
        showMessage,
        hideMessage
    }
}
