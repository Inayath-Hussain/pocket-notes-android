import { routes } from "../routes"
import { IGroup } from "../utilities/localStorage/group"

export type RootStackParamList = {
    [routes.home]: undefined,
    [routes.note]: IGroup
}