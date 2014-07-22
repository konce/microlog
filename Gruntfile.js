module.exports = function(grunt) {    //Gruntfile基本框架
     
    // Project configuration.
    grunt.initConfig({    
        //大多数Grunt任务需要依赖传入initConfig中的对象
        pkg: grunt.file.readJSON('package.json'),    //以JSON格式读取package.json文件，后面用到了pkg.name
        uglify: {    
            //uglify任务
            options: {    
                //uglify任务的特殊的选项
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'    //文件头部添加一行注释
            },
            build: {
                src: './routes/index.js',    //源文件
                dest: './routes/index.min.js'    //目标文件
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};
