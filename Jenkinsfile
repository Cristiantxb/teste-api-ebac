pipeline {
    agent any


    stages {
        stage('Clonar o repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/Cristiantxb/teste-api-ebac.git'
            }
        }

    
        stage('Instalar dependencias') {
             
            steps {
                nodejs('node'){
                    bat 'npm install'
                            }
                    }
        }
    
        stage('Executar Testes') {
            steps {
                 nodejs('node'){
                    bat 'npx cypress run'
                }
                        }
        }
}
    
    
}