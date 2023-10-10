
THREE = require 'three'

export objectPositionMixin = {
    props:
        position:
            type: Object
            default: -> {
                x: 0
                y: 0
                z: 0
            }

    methods:
        watchPosition: ->
            @object.position.set @position.x, @position.y, @position.z
    watch:
        position: 
            handler: -> @watchPosition()
            deep: true
    created: () ->
        @watchPosition()
}
