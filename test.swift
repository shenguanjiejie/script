#!/usr/bin/env swift
import Foundation

class TimeInfo {
    func timestemp() -> String {
        let ts = Int(Date().timeIntervalSince1970)
        return "\(ts)"
    }
}

let timeInfo = TimeInfo()


print(timeInfo.timestemp())
