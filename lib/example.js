"use strict";

var _index = require("./index");

var directedAcyclicGraph = _index.DirectedAcyclicGraph.fromNothing(),
    vertexName = "i",
    sourceVertexName = "j",
    targetVertexName = "k";

directedAcyclicGraph.addVertexByVertexName(vertexName);
directedAcyclicGraph.addEdgeByVertexNames(sourceVertexName, targetVertexName);
var orderedVertexNames = directedAcyclicGraph.getOrderedVertexNames();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsiZGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJEaXJlY3RlZEFjeWNsaWNHcmFwaCIsImZyb21Ob3RoaW5nIiwidmVydGV4TmFtZSIsInNvdXJjZVZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiYWRkVmVydGV4QnlWZXJ0ZXhOYW1lIiwiYWRkRWRnZUJ5VmVydGV4TmFtZXMiLCJvcmRlcmVkVmVydGV4TmFtZXMiLCJnZXRPcmRlcmVkVmVydGV4TmFtZXMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHQyw0QkFBcUJDLFdBQXJCLEVBQTdCO0FBQUEsSUFDTUMsVUFBVSxHQUFHLEdBRG5CO0FBQUEsSUFFTUMsZ0JBQWdCLEdBQUcsR0FGekI7QUFBQSxJQUdNQyxnQkFBZ0IsR0FBRyxHQUh6Qjs7QUFLQUwsb0JBQW9CLENBQUNNLHFCQUFyQixDQUEyQ0gsVUFBM0M7QUFFQUgsb0JBQW9CLENBQUNPLG9CQUFyQixDQUEwQ0gsZ0JBQTFDLEVBQTREQyxnQkFBNUQ7QUFFQSxJQUFNRyxrQkFBa0IsR0FBR1Isb0JBQW9CLENBQUNTLHFCQUFyQixFQUEzQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEaXJlY3RlZEFjeWNsaWNHcmFwaCB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmNvbnN0IGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbU5vdGhpbmcoKSxcbiAgICAgIHZlcnRleE5hbWUgPSBcImlcIixcbiAgICAgIHNvdXJjZVZlcnRleE5hbWUgPSBcImpcIixcbiAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBcImtcIjtcblxuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuY29uc3Qgb3JkZXJlZFZlcnRleE5hbWVzID0gZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0T3JkZXJlZFZlcnRleE5hbWVzKCk7XG4iXX0=