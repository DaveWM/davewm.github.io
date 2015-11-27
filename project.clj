(defproject modern-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.145"]
                 [reagent "0.5.1" :exclusions [cljsjs/react]]
                 [cljs-ajax "0.3.14"]
                 [cljsjs/react-router "0.13.2-0" :exclusions [cljsjs/react]]
                 ]
  :clean-targets ^{:protect false} ["dist/js" "target" "dist/app.js"]
  :plugins [[cider/cider-nrepl "0.9.1"]
            [lein-cljsbuild "1.1.0"]
            [lein-figwheel "0.4.1"]
            ]
  :figwheel { :css-dirs ["dist/css"] }
  :cljsbuild {:builds
              [{
                :id "dev"
                :source-paths ["src/cljs/"]
                :source-map true
                :figwheel {:on-jsload "app.core/main"}
                           
                :compiler {;; CLS generated JS script filename
                           :output-to "dist/app.js"

                           :main "app.core"

                           :pretty-print true
                           }
                }
               {
                :id "release"
                :source-paths ["src/cljs/"]
                :source-map true
                           
                :compiler {
                           :output-to "dist/app.js"

                           :main "app.core"

                           :optimizations :advanced

                           :pretty-print true

                           :externs ["dist/material.js"]
                           }
                }
               ]})

