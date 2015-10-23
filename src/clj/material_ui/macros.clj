; shamelessly stolen from https://github.com/tuhlmann/reagent-material

(ns material-ui.macros)

(def material-tags
  '[AppBar
    Avatar
    Card
    CardHeader
    CardMedia
    CardText
    CardTitle
    FlatButton
    FontIcon
    GridList
    GridTile])

(defn material-ui-react-import [tname]
  `(def ~tname (reagent.core/adapt-react-class (aget js/MaterialUI ~(name tname)))))

(defmacro export-material-ui-react-classes []
  `(do ~@(map material-ui-react-import material-tags)))
