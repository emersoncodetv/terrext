# Herramientas para Terraform

### terrext

#### CLI/CLA para la validación de código Terraform

Esta herramienta ayuda a la validación de código terraform con extención \*.tf.json.

Tools for terraform CI/CD

```shell
$ terrext --help
```

```shell
terrext <command>

Commands:
  terrext paths      Lista todos los realpath de cada archivo .tf.json en un
                     directorio específico
  terrext resources  Lista los resource con sus respectivos nombres
  terrext tags       Lista los tags de todos los recursos de un archivo de
                     terraform

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```
