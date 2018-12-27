(defproject modern-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.439"]
                 [reagent "0.6.0-alpha2"]
                 [cljs-ajax "0.6.0"]
                 [cljsjs/d3 "3.5.7-1"]
                 [reagent-material-ui "0.2.2"]
                 [bidi "2.1.4"]
                 [kibu/pushy "0.3.6"]
                 [markdown-clj "0.9.89"]
                 [com.andrewmcveigh/cljs-time "0.4.0"]]
  :exclusions [cljsjs/react]
  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.18"]
                                  [cider/piggieback "0.3.10"]]
                   :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}}
  :clean-targets ^{:protect false} ["dist/js" "target" "dist/app.js"]
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.18"]]
  :figwheel {:css-dirs ["dist"]
             :nrepl-port 7888 }
  :cljsbuild {:builds
              [{
                :id           "dev"
                :source-paths ["src/cljs/"]
                :figwheel     {:on-jsload "app.core/main"}

                :compiler     {;; CLS generated JS script filename
                               :output-to    "dist/app.js"
                               :output-dir "dist/out/dev"

                               :main         "app.core"

                               :pretty-print true

                               :npm-deps {"@material-ui/core" "3.7.1"
                                          react "16.7.0"
                                          react-dom "16.7.0"}
                               :install-deps true

                               :source-map   true}

                }
               {
                :id           "release"
                :source-paths ["src/cljs/"]

                :compiler     {
                               :output-to     "dist/app.js"
                               :output-dir "dist/out"

                               :main          "app.core"

                               :optimizations :advanced

                               :pretty-print  true

                               :source-map   "dist/source-map"}
                }
               ]})

