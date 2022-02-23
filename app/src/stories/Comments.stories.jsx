import Comments from "./components/Comments/error"
import { action } from "stories"

export default {
    title: "Error",
    component: Error
}

const props = {

    message: "yooo",
    onClose: alert()
}

export const Primary = (prop) => <Error {...props}></Error>