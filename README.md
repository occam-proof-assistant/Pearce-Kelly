# Occam Pearce-Kelly

An implementation of the Pearce-Kelly algorithm for [Occam](https://github.com/jecs-imperial/occam).

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Building](#building)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Introduction

This algorithm maintains a topological ordering of a directed acyclic graph. It does this by re-ordering whenever an edge is added, if possible, or reporting the cycle that breaks the ordering if not.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-pearce-kelly

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/jecs-imperial/occam-pearce-kelly.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Usage

An empty and therefore trivially acyclic directed graph can be created with the `fromNothing()` factory method. Then edges and vertices can be added to it incrementally:

```
import { DirectedAcyclicGraph } from "occam-pearce-kelly";

const directedAcyclicGraph = DirectedAcyclicGraph.fromNothing(),
      vertexName = "i",
      sourceVertexName = "j",
      targetVertexName = "k";

directedAcyclicGraph.addVertexByVertexName(vertexName);

directedAcyclicGraph.addEdgeByVertexNames(sourceVertexName, targetVertexName);
```

Note that there is no need to add vertices explicitly, they will be added whenever necessary when edges that reference them are added. You can also use the `fromVertexNames()` factory method. Since no edges are added, the graph is again trivially acyclic.

A better way to create a directed acyclic graph is to a create graph and topologically order its vertices by way of the [Kahn](https://github.com/jecs-imperial/occam-kahn) algorithm. These topologically ordered vertices, complete with edge information, can then be used as the input for a directed acyclic graph:

```
import { Graph } from "occam-kahn";

const vertexLiterals = [

         ["a", ["b"]],
         ["b", ["c"]],
         ["d", ["c"]],
         ["e", []],
         ["f", ["g"]],
         ["h", ["g"]]

       ],
       graph = Graph.fromVertexLiterals(vertexLiterals),
       orderedVertices = graph.getOrderedVertices(),
       directedAcyclicGraph =

         DirectedAcyclicGraph.fromOrderedVertices(orderedVertices);
```
            
From this point on, edges and vertices can again be added incrementally:

```
const cyclicVertexNames = directedAcyclicGraph.addEdgeByVertexNames(sourceVertexName, targetVertexName);
```
        
The return value of the `addEdgeByVertexNames()` will be `null` if the edge does not break the topological ordering. If it does, the cycle that breaks the ordering will be returned in the form of an array of vertex names.

To make use of the topological ordering, call the `getOrderedVertexNames()` method:

```
const orderedVertexNames = directedAcyclicGraph.getOrderedVertexNames();
```

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Acknowledgements

This implementation is based on the algorithm described in the following paper:

* [A Dynamic Topological Sort Algorithm for Directed Acyclic Graphs](http://homepages.ecs.vuw.ac.nz/~djp/files/PK-JEA07.pdf) by David J. Pearce and Paul H.J. Kelly.

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
