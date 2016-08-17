(ns helpers
  (:require [cljs-time.format :as time]))

(defn format-date-month-year [date]
  (->> date
       (time/parse (time/formatters :basic-date-time))
       (time/unparse (time/formatter "MMMM YYYY"))))
