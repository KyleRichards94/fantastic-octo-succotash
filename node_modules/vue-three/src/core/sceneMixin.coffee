
THREE = require 'three'
$ = require 'jquery'

export sceneMixin = {
    name: 'scene'

    methods:
        onRender: (fn) ->
            @_onRenderStack.push fn
            () =>
                index = @_onRenderStack.indexOf fn
                @_onRenderStack.splice index, 1 if index > -1
                true

        startRenderer: ->
            _lastRender = 0
            _delta = 0
            render = (ts) =>
                _delta = ts - _lastRender
                _lastRender = ts
                requestAnimationFrame render if @renderRunning
                fn ts, _delta for fn in @_onRenderStack
                @renderer.render( @scene, @camera )

            requestAnimationFrame render


        onResize: () ->
            @canvasWidth = window.innerWidth
            @canvasHeight = window.innerHeight
            @aspect = @canvasWidth / @canvasHeight
            @frustumSize = 15

            @renderer.setSize @canvasWidth, @canvasHeight

            @camera.aspect = @aspect
            @camera.updateProjectionMatrix()

    created: () ->
        @renderer = new THREE.WebGLRenderer { antialias: true }
        @renderer.setPixelRatio window.devicePixelRatio
        @renderer.setClearColor 0x000000

        # @camera = new THREE.OrthographicCamera( @frustumSize * @aspect / - 2, @frustumSize * @aspect / 2, @frustumSize / 2, @frustumSize / - 2, 1, 1000 )
        @camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.05, 2000 )

        @scene = new THREE.Scene()
        @scene.add @camera

        @object = @scene
        @sceneComponent = @

        window.THREE = THREE
        window.scene = @scene

        @dom = @renderer.domElement
        @dom.style.position = "relative"

        @renderRunning = true

        @_onRenderStack = []
        @startRenderer()

    mounted: () ->
        @.$el.append @dom
        window.addEventListener 'resize', @onResize
        @onResize()

    beforeDestroy: () ->
        @renderRunning = false
        window.removeEventListener 'resize', @onResize
}
