// **********************************************************************
//
// Copyright (c) 2003-2015 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.6b
//
// <auto-generated>
//
// Generated from file `Callback.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(module, require, exports)
{
    var Ice = require("zeroc-icejs").Ice;
    var __M = Ice.__M;
    var Slice = Ice.Slice;

    var Demo = __M.module("Demo");

    Demo.CallbackReceiver = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 0,
        [
            "::Demo::CallbackReceiver",
            "::Ice::Object"
        ],
        -1, undefined, undefined, false);

    Demo.CallbackReceiverPrx = Slice.defineProxy(Ice.ObjectPrx, Demo.CallbackReceiver.ice_staticId, undefined);

    Slice.defineOperations(Demo.CallbackReceiver, Demo.CallbackReceiverPrx,
    {
        "callback": [, , , , , , [[3]], , , , ]
    });

    Demo.CallbackSender = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 0,
        [
            "::Demo::CallbackSender",
            "::Ice::Object"
        ],
        -1, undefined, undefined, false);

    Demo.CallbackSenderPrx = Slice.defineProxy(Ice.ObjectPrx, Demo.CallbackSender.ice_staticId, undefined);

    Slice.defineOperations(Demo.CallbackSender, Demo.CallbackSenderPrx,
    {
        "addClient": [, , , , , , [[Ice.Identity]], , , , ]
    });
    exports.Demo = Demo;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : window.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : window));
