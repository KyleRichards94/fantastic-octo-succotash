
THREE = require 'three'

export object3dMixin = {
    name: 'object3d'
    template: '<div object3d><slot></slot></div>'
    created: () ->
        @object = new THREE.Object3D()
        @scene = @$parent.scene
        @camera = @$parent.camera
        @sceneComponent = @$parent.sceneComponent
        @object.component = @

        if @onTick?
            @tickHandler = @sceneComponent.onRender @onTick

    mounted: () ->
        @$parent.object.add @object

    beforeDestroy: () ->
        @$parent.object.remove @object
        @tickHandler?()
}
