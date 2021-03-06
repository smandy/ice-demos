#!/usr/bin/env python
# **********************************************************************
#
# Copyright (c) 2003-2017 ZeroC, Inc. All rights reserved.
#
# **********************************************************************

import sys, time, Ice

Ice.loadSlice('Hello.ice')
Ice.updateModules()
import Demo

class HelloI(Demo.Hello):
    def sayHello(self, delay, current=None):
        if delay != 0:
            time.sleep(delay / 1000.0)
        print("Hello World!")

    def shutdown(self, current=None):
        current.adapter.getCommunicator().shutdown()

class Server(Ice.Application):
    def run(self, args):
        if len(args) > 1:
            print(self.appName() + ": too many arguments")
            return 1

        adapter = self.communicator().createObjectAdapter("Hello")
        adapter.add(HelloI(), Ice.stringToIdentity("hello"))
        adapter.activate()
        self.communicator().waitForShutdown()
        return 0

sys.stdout.flush()
app = Server()
sys.exit(app.main(sys.argv, "config.server"))
