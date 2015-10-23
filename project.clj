(defproject modern-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure "1.7.0"]
                 ;[com.cemerick/piggieback "0.2.1"]
                 [org.clojure/tools.nrepl "0.2.10"]
                 [weasel "0.7.0" :exclusions [org.clojure/clojurescript]]
                 [org.clojure/clojurescript "1.7.145"]
                 [reagent "0.5.1" :exclusions [cljsjs/react]]
                 [cljs-ajax "0.3.14"]
                 ]
  :clean-targets ^{:protect false} ["resources/public/js" "target"]
  :plugins [[cider/cider-nrepl "0.9.1"] [lein-cljsbuild "1.1.0"]]
  :cljsbuild {:builds
              [{
                ;; CLJS source code path
                :source-paths ["src/cljs/"]
                :source-map true

                ;; Google Closure (CLS) options configuration
                :compiler {;; CLS generated JS script filename
                           :output-to "resources/public/js/app.js"

                           ;; minimal JS optimization directive
                           :optimizations :whitespace

                           ;; generated JS code prettyfication
                           :pretty-print true
                           }}]})

