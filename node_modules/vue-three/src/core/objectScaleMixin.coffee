
THREE = require 'three'

export objectScaleMixin = {
    props:
        scaleScalar:
            type: Number
            default: 1
        scale:
            type: Object
            default: -> {
                x: 1
                y: 1
                z: 1
            }

    methods:
        watchScale: ->
            @object.scale.set @scale.x * @scaleScalar, @scale.y * @scaleScalar, @scale.z * @scaleScalar
    watch:
        scale:
            handler: -> @watchScale()
            deep: true
        scaleScalar: -> @watchScale()
    created: () ->
        @watchScale()
}
