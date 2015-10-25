; shamelessly stolen from https://github.com/tuhlmann/reagent-material

(ns material-ui.macros)

(def material-tags
  '[AppBar
    Avatar
    Card
    CardActions
    CardHeader
    CardMedia
    CardText
    CardTitle
    CircularProgress
    FlatButton
    FontIcon
    GridList
    GridTile
    IconButton
    List
    ListItem
    Paper
    RaisedButton
    Tabs
    Tab])

(defn material-ui-react-import [tname]
  `(def ~tname (reagent.core/adapt-react-class (aget js/MaterialUI ~(name tname)))))

(defmacro export-material-ui-react-classes []
  `(do
     ~@(map material-ui-react-import material-tags)
     (def ~'ThemeManager (-> js/MaterialUI
                           (aget "Styles")
                           (aget "ThemeManager")))
     (def ~'Colors (-> js/MaterialUI
                     (aget "Styles")
                     (aget "Colors")))
     (def ~'LightRawTheme (-> js/MaterialUI
                     (aget "Styles")
                     (aget "LightRawTheme")))
     ))
